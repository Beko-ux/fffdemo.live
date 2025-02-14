import React from "react";
import { useNavigate } from "react-router-dom";

const WhenShouldISeeADoctorPage1OptionLists = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/please-consult-a-doctor");
  };

  return (
    <div className="WhenShouldISeeADoctorPage1OptionLists">
      <button className="OptionButton" onClick={handleRedirect}>
        Severe headaches and stiff neck
      </button>
      <button className="OptionButton" onClick={handleRedirect}>
        Appears very ill or sensitive to touch
      </button>
      <button className="OptionButton" onClick={handleRedirect}>
        Fever in infants under 12 weeks
      </button>
      <button className="OptionButton" onClick={handleRedirect}>
        Clouding of consciousness
      </button>
      <button className="OptionButton" onClick={handleRedirect}>
        High-pitched crying
      </button>
      <button className="OptionButton" onClick={handleRedirect}>
        No urine for over 12 hours
      </button>
    </div>
  );
};

export default WhenShouldISeeADoctorPage1OptionLists;