import React from "react";
import ProgressBar from "../components/ProgressBar";
import WhenShouldISeeADoctorPageHeader from "../components/WhenShouldISeeADoctorPageHeader";
import WhenShouldISeeADoctorPage1OptionLists from "../components/WhenShouldISeeADoctorPage1OptionLists";
import WhenShouldISeeDoctorPage1SkipButton from "../components/WhenShouldISeeDoctorPage1SkipButton";
import "../styles/WhenShouldISeeADoctorPage1.css";

const WhenShouldISeeADoctorPage1 = () => {
  return (
    <div className="container WhenShouldISeeADoctorPage1">
      <ProgressBar
        backLink="/fever-is-your-friend"
        skipLink="/when-should-i-see-a-doctor-2"
      />
      <WhenShouldISeeADoctorPageHeader />
      <WhenShouldISeeADoctorPage1OptionLists />
      <div className="WhenShouldISeeDoctorPage1SkipButton">
        <WhenShouldISeeDoctorPage1SkipButton />
      </div>
    </div>
  );
};

export default WhenShouldISeeADoctorPage1;