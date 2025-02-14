import React from "react";
import ProgressBar from "../components/ProgressBar";
import FeverIsYourFriendPageHeader from "../components/FeverIsYourFriendPageHeader";
import FeverIsYourFriendPageVideo from "../components/FeverIsYourFriendPageVideo";
import FeverIsYourFriendPageNextButton from "../components/FeverIsYourFriendPageNextButton";
import "../styles/FeverIsYourFriendVideoPage.css";

const FeverIsYourFriendVideoPage = () => {
  return (
    <div className="container">
      <ProgressBar backLink="/" skipLink="/when-should-i-see-a-doctor-1" />
      <FeverIsYourFriendPageHeader />
      <FeverIsYourFriendPageVideo />
      <FeverIsYourFriendPageNextButton />
    </div>
  );
};

export default FeverIsYourFriendVideoPage;