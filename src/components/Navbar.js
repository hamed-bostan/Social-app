import React from "react";
import "./Navbar.css";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import avatar from "../images/01.jpg";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_wrapper">
        <div className="navbar_left">
          <h2>SocialLogo</h2>
        </div>

        <div className="navbar_center">
          <SearchIcon className="navbar_search_icon" />
          <input type="text" placeholder="search for friends,post or video" />
        </div>

        <div className="navbar_right">
          <div className="navbar_link_container">
            <a href="#">homepage</a>
            <a href="#">timeline</a>
          </div>
          <div className="navbar_icons">
            <PersonIcon />
            <MessageIcon />
            <NotificationsIcon />
          </div>
          <div className="navbar_avatar_container">
            <img className="navbar_avatar" src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;