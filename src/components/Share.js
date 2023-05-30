import React from "react";
import "./Share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import image01 from "../images/01.jpg";

const Share = () => {
  return (
    <div className="share_container">
      <div className="share_wrapper">
        <div className="share_top">
          <img src={image01} alt="image" />
          <input type="text" placeholder="what is in your mind?" />
        </div>
        <hr className="share_line" />
        <div className="share_bottom">
          <div className="share_icon_container">
            <div className="share_icon">
              <PermMediaIcon className="share_photo" />
              <span>photo or video</span>
            </div>
            <div className="share_icon">
              <LabelIcon className="share_tag" />
              <span>tag</span>
            </div>
            <div className="share_icon">
              <LocationOnIcon className="share_location" />
              <span>location</span>
            </div>
            <div className="share_icon">
              <EmojiEmotionsIcon className="share_imoji" />
              <span>feelings</span>
            </div>
          </div>
          <div className="share_button_container">
            <button className="share_button">share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
