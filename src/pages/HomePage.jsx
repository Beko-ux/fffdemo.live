import React from "react";
import HomePageHeader from "../components/HomePageHeader";
import HomePageOptionSection from "../components/HomePageOptionSection";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="container">
      <HomePageHeader />
      <HomePageOptionSection />
    </div>
  );
};

export default HomePage;