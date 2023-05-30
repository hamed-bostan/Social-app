import React from "react";
import "./CloseFriend.css";

const CloseFriend = ({ data }) => {
  return (
    <div className="sidebar_image">
      <img src={data.profilePicture} alt="image" />
      <span className="sidebar_info">{data.username}</span>
    </div>
  );
};

export default CloseFriend;
