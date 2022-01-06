import React from "react";
import { HiDocumentDuplicate } from "react-icons/hi";

import "./style.css";

function Sidebar() {
  return (
    <div className="sidebar-cont">
      <div className="top-head">
        <HiDocumentDuplicate className="icon logo" />
        <span>ResumeBuilder</span>
      </div>
      <br />
      <Form1 />
    </div>
  );
}

function Form1() {
  return (
    <div className="form-cont step1">
      <h3>Generate Your Resume</h3>
      <br />
    </div>
  );
}

export default Sidebar;
