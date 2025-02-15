import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import BrowserWarning from "./components/BrowserWarning";
import { registerSW } from "virtual:pwa-register";
import UpdateNotification from "./components/UpdateNotification";
import "./styles/UpdateNotification.css";

function App() {
  const [isPWAInstalled, setIsPWAInstalled] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    // Correct PWA detection (works on most devices)
    const checkIfPWAInstalled = () => {
      return (
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone ||
        document.referrer.startsWith("android-app://")
      );
    };

    const installedPWA = checkIfPWAInstalled();
    setIsPWAInstalled(installedPWA);

    // If app is installed but opened in a browser, redirect to warning page
    if (installedPWA && !window.matchMedia("(display-mode: standalone)").matches) {
      window.location.href = "/browser-warning";
    }

    // Service Worker update check
    const updateSW = registerSW({
      onNeedRefresh() {
        setUpdateAvailable(true);
      },
      onOfflineReady() {
        console.log("PWA is ready for offline use");
      },
    });
  }, []);

  return (
    <Router>
      <Routes>
        {isPWAInstalled && <Route path="/browser-warning" element={<BrowserWarning />} />}
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
      {updateAvailable && <UpdateNotification onUpdate={() => window.location.reload()} />}
    </Router>
  );
}

export default App;
