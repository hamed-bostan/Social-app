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

import { Users } from "../data.js";
import CloseFriend from "./CloseFriend";

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
        <div className="sidebar_image_container">
          {Users.map((item) => {
            return <CloseFriend key={item.id} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
