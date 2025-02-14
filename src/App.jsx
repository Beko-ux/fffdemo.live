import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import PWAInstallPrompt from "./components/PWAInstallPrompt";
import "./styles/PWAInstallPrompt.css";

function App() {
  return (
    <Router> {/* ✅ Router should only be declared once here */}
      <AppRoutes />
      <PWAInstallPrompt />
    </Router>
  );
}

export default App;
