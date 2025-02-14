import React, { useEffect, useState } from "react";
import "../styles/PWAInstallPrompt.css";

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect iOS devices
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);

    if (isIOSDevice) {
      setIsIOS(true);
      setShowPopup(true);
    } else {
      // Handle normal PWA install event
      const handleBeforeInstallPrompt = (e) => {
        e.preventDefault();
        setDeferredPrompt(e);
        setShowPopup(true);
      };

      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

      return () => {
        window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      };
    }
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
        setShowPopup(false);
      });
    }
  };

  if (!showPopup) return null;

  return (
    <div className="pwa-overlay">
      <div className="pwa-popup">
        <div className="pwa-content">
          {isIOS ? (
            <>
              <img src="/assets/popup.png" alt="iOS Install Guide" className="pwa-icon" />
              <p>To install this PWA on iOS, open Safari, tap <strong>Share</strong>, then select <strong>"Add to Home Screen"</strong>.</p>
            </>
          ) : (
            <>
              <img src="/assets/popup.png" alt="PWA Icon" className="pwa-icon" />
              <p>Install FeverApp for a better experience.</p>
              <button onClick={handleInstallClick}>INSTALL</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
