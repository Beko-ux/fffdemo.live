import React from "react";
import { useNavigate } from "react-router-dom";

const FeverIsYourFriendVideoPageRedirect = ({ targetPath, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(targetPath);
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default FeverIsYourFriendVideoPageRedirect;