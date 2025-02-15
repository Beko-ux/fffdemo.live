import React, { useState } from "react";
import "../styles/BrowserWarning.css"; // Ensure CSS file exists

const BrowserWarning = () => {
  const [message, setMessage] = useState("");

  const openApp = () => {
    window.location.href = "https://fffdemo.live"; // Your actual PWA URL

    // Attempt to close the tab (won't work in most cases unless tab was opened via JS)
    setTimeout(() => {
      window.close();
      if (!window.closed) {
        setMessage("If the app didn't open, please close this tab manually.");
      }
    }, 1000);
  };

  return (
    <div className="browser-warning-container">
      <div className="browser-warning-card">
        <h1>⚠ Open the Installed App</h1>
        <p>
          It looks like you already have the app installed! Please use the installed version
          for a better experience.
        </p>
        <button onClick={openApp} className="open-app-button">Open App</button>
        {message && <p className="close-tab-message">{message}</p>}
      </div>
    </div>
  );
};

export default BrowserWarning;
