import React from "react";
import Default from "../../comp/Templates/Default";
import Sidebar from "../../comp/Sidebar/Sidebar";

import { HiMenuAlt1 } from "react-icons/hi";

import "./style.css";

function Home() {
  return (
    <div className="home-cont">
      <Sidebar />
      <div className="main">
        <div className="top-bar">
          <h3>Generate Resume</h3>
          <div className="right">
            <button className="btn download">Download</button>
            <HiMenuAlt1 className="icon" />
          </div>
        </div>
        <div className="templates-container">
          <Default /> 
        </div>
      </div>
    </div>
  );
}

export default Home;
