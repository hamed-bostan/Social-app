import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Rightside from "./Rightside";
import "./Home.css";
import Cover from "./Cover";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home_container">
        <Sidebar />
        {/* <Cover /> */}
        <Feed />
        <Rightside />
      </div>
    </div>
  );
};

export default Home;
