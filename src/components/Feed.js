import React from "react";
import "./Feed.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import image01 from "../images/01.jpg";

const Feed = () => {
  return (
    <div className="feed_container">
      <div className="feed_wrapper">
        <div className="feed_top">
          <img src={image01} alt="image" />
          <input type="text" placeholder="what is in your mind?" />
        </div>
        <hr className="feed_line" />
        <div className="feed_bottom">
          <div className="feed_icon_container">
            <div className="feed_icon">
              <PermMediaIcon className="feed_photo" />
              <span>photo or video</span>
            </div>
            <div className="feed_icon">
              <LabelIcon className="feed_tag" />
              <span>tag</span>
            </div>
            <div className="feed_icon">
              <LocationOnIcon className="feed_location" />
              <span>location</span>
            </div>
            <div className="feed_icon">
              <EmojiEmotionsIcon className="feed_imoji" />
              <span>feelings</span>
            </div>
          </div>
          <div className="feed_button_container">
          <button className="feed_button">share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
