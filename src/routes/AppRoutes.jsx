import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FeverIsYourFriendVideoPage from "../pages/FeverIsYourFriendVideoPage";
import WhenShouldISeeADoctorPage1 from "../pages/WhenShouldISeeADoctorPage1";
import WhenShouldISeeADoctorPage2 from "../pages/WhenShouldISeeADoctorPage2";
import PleaseConsultADoctorPage from "../pages/PleaseConsultADoctorPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/fever-is-your-friend" element={<FeverIsYourFriendVideoPage />} />
      <Route path="/when-should-i-see-a-doctor-1" element={<WhenShouldISeeADoctorPage1 />} />
      <Route path="/when-should-i-see-a-doctor-2" element={<WhenShouldISeeADoctorPage2 />} />
      <Route path="/please-consult-a-doctor" element={<PleaseConsultADoctorPage />} />
    </Routes>
  );
};

export default AppRoutes;
