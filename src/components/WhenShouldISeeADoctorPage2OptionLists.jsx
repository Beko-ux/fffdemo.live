import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/WhenShouldISeeADoctorPage2.css";

const WhenShouldISeeADoctorPage2OptionLists = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/please-consult-a-doctor");
  };

  return (
    <div className="WhenShouldISeeADoctorPage2OptionLists">
      <button className="OptionButton" onClick={handleRedirect}>
        Altered consciousness
      </button>
      <button className="OptionButton" onClick={handleRedirect}>
        Non-blanching rash
      </button>
      <button className="OptionButton" onClick={handleRedirect}>
        Fever over 40°C in the morning
      </button>
      <button className="OptionButton" onClick={handleRedirect}>
        Fever for over 3 days
      </button>
      <button className="OptionButton" onClick={handleRedirect}>
        You are very concerned
      </button>
    </div>
  );
};

export default WhenShouldISeeADoctorPage2OptionLists;