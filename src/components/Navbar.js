import React from "react";
import "./Navbar.css";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_wrapper">
        <div className="navbar_left">
          <span>Sopranos</span>
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
            <div className="navbar_icon_item">
              <PersonIcon />
              <span className="navbar_icon_badge">1</span>
            </div>
            <div className="navbar_icon_item">
              <MessageIcon />
              <span className="navbar_icon_badge">2</span>
            </div>
            <div className="navbar_icon_item">
              <NotificationsIcon />
              <span className="navbar_icon_badge">1</span>
            </div>
          </div>
          <div className="navbar_avatar_container">
            <img
              className="navbar_avatar"
              src="./assets/person/1.jpeg"
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
