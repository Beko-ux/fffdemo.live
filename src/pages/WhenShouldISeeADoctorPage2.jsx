import React from "react";
import ProgressBar from "../components/ProgressBar";
import WhenShouldISeeADoctorPageHeader from "../components/WhenShouldISeeADoctorPageHeader";
import WhenShouldISeeADoctorPage2OptionLists from "../components/WhenShouldISeeADoctorPage2OptionLists";
import "../styles/WhenShouldISeeADoctorPage2.css";

const WhenShouldISeeADoctorPage2 = () => {
  return (
    <div className="container WhenShouldISeeADoctorPage2">
      <ProgressBar backLink="/when-should-i-see-a-doctor-1"/>
      <WhenShouldISeeADoctorPageHeader />
      <WhenShouldISeeADoctorPage2OptionLists />
    </div>
  );
};

export default WhenShouldISeeADoctorPage2;