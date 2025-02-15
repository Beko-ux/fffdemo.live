import React from "react";
import "../styles/UpdateNotification.css"; // Import the CSS file

const UpdateNotification = ({ onUpdate }) => {
  return (
    <div className="update-notification">
      <p>A new version is available!</p>
      <button onClick={onUpdate}>Update</button>
    </div>
  );
};

export default UpdateNotification;
