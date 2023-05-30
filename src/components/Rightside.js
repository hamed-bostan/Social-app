import React from "react";
import "./Rightside.css";

const Rightside = () => {
  return (
    <div className="rightside_container">
      <div className="top_rightside_info_container">
        <h4 className="rightbar_title">user information</h4>
        <div className="top_rightside_info">
          <span className="rightbarInfoKey">city:</span>
          <span className="rightbarInfoValue">new york</span>
        </div>
        <div className="top_rightside_info">
          <span className="rightbarInfoKey">from:</span>
          <span className="rightbarInfoValue">madrid</span>
        </div>
        <div className="top_rightside_info">
          <span className="rightbarInfoKey">relationship: </span>
          <span className="rightbarInfoValue">single</span>
        </div>
      </div>
      <div className="rightside_bottom_container">
        <h4 className="rightbar_title">user friends</h4>
        <div className="rightside_image_container">
          <div className="rightside_image">
            <img src="assets/person/1.jpeg" alt="" />
            <span>john carter</span>
          </div>
          <div className="rightside_image">
            <img src="assets/person/2.jpeg" alt="" />
            <span>john carter</span>
          </div>
          <div className="rightside_image">
            <img src="assets/person/3.jpeg" alt="" />
            <span>john carter</span>
          </div>
          <div className="rightside_image">
            <img src="assets/person/4.jpeg" alt="" />
            <span>john carter</span>
          </div>
          <div className="rightside_image">
            <img src="assets/person/5.jpeg" alt="" />
            <span>john carter</span>
          </div>
          <div className="rightside_image">
            <img src="assets/person/6.jpeg" alt="" />
            <span>john carter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightside;
