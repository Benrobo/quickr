import React from "react";
import { HiDocumentDuplicate, HiUpload } from "react-icons/hi";
import {
  UserInfo,
  Address,
  WorkExp,
  Education,
  Hobbies,
  Quotes,
  ProSkills,
  PersonalSkills,
  SocialLinks,
  SidebarStyles,
} from "../FormSteps";
import "./style.css";

function Sidebar() {
  return (
    <div className="sidebar-cont">
      <div className="top-head">
        <HiDocumentDuplicate className="icon logo" />
        <span>ResumeBuilder</span>
      </div>
      {/* <UserInfo /> */}
      {/* <Address /> */}
      {/* <WorkExp /> */}
      {/* <Education /> */}
      {/* <Hobbies /> */}
      {/* <Quotes /> */}
      {/* <ProSkills /> */}
      {/* <PersonalSkills /> */}
      {/* <SocialLinks /> */}
      <SidebarStyles />
    </div>
  );
}

export default Sidebar;
