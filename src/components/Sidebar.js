import React from "react";
import "./Sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpIcon from "@mui/icons-material/Help";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import image01 from "../images/01.jpg";
import image02 from "../images/02.jpg";
import image03 from "../images/03.jpg";
import image04 from "../images/04.jpg";
import image05 from "../images/05.jpg";
import image06 from "../images/06.jpg";
import image07 from "../images/07.png";
import image08 from "../images/08.jpg";
import image09 from "../images/09.jpg";
import image10 from "../images/10.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div className="sidebar_wrapper">
        <div className="sidebar_icon">
          <RssFeedIcon />
          <span className="sidebar_info">feed</span>
        </div>
        <div className="sidebar_icon">
          <ChatIcon />
          <span className="sidebar_info">chats</span>
        </div>
        <div className="sidebar_icon">
          <PlayCircleFilledIcon />
          <span className="sidebar_info">videos</span>
        </div>
        <div className="sidebar_icon">
          <GroupIcon />
          <span className="sidebar_info">groups</span>
        </div>
        <div className="sidebar_icon">
          <BookmarkIcon />
          <span className="sidebar_info">bookmarks</span>
        </div>
        <div className="sidebar_icon">
          <HelpIcon />
          <span className="sidebar_info">questions</span>
        </div>
        <div className="sidebar_icon">
          <WorkIcon />
          <span className="sidebar_info">jobs</span>
        </div>
        <div className="sidebar_icon">
          <EventIcon />
          <span className="sidebar_info">events</span>
        </div>
        <div className="sidebar_icon">
          <WorkIcon />
          <span className="sidebar_info">jobs</span>
        </div>
        <button className="sidebar_button">show more</button>
        <hr className="line" />
        {/* images */}
        {/* images */}
        <div className="sidebar_image">
          <img src={image01} alt="image" />
          <span className="sidebar_info">eren</span>
        </div>
        <div className="sidebar_image">
          <img src={image02} alt="image" />
          <span className="sidebar_info">mikasa</span>
        </div>
        <div className="sidebar_image">
          <img src={image03} alt="image" />
          <span className="sidebar_info">anney</span>
        </div>
        <div className="sidebar_image">
          <img src={image04} alt="image" />
          <span className="sidebar_info">erwin</span>
        </div>
        <div className="sidebar_image">
          <img src={image05} alt="image" />
          <span className="sidebar_info">levi</span>
        </div>
        <div className="sidebar_image">
          <img src={image06} alt="image" />
          <span className="sidebar_info">john</span>
        </div>
        <div className="sidebar_image">
          <img src={image07} alt="image" />
          <span className="sidebar_info">erwin</span>
        </div>
        <div className="sidebar_image">
          <img src={image08} alt="image" />
          <span className="sidebar_info">levi</span>
        </div>
        <div className="sidebar_image">
          <img src={image09} alt="image" />
          <span className="sidebar_info">conney</span>
        </div>
        <div className="sidebar_image">
          <img src={image10} alt="image" />
          <span className="sidebar_info">attck</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
