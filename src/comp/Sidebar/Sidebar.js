import React from "react";
import { HiDocumentDuplicate, HiUpload } from "react-icons/hi";
import { Step1, Step2, Step3 } from "../FormSteps";
import "./style.css";

function Sidebar() {
  return (
    <div className="sidebar-cont">
      <div className="top-head">
        <HiDocumentDuplicate className="icon logo" />
        <span>ResumeBuilder</span>
      </div>
      <br />
      <Step1 />
    </div>
  );
}

export default Sidebar;
