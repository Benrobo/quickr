import React, { useEffect, useState } from "react";
// import { HiDocumentDuplicate, HiUpload } from "react-icons/hi";
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

import logo from "../../logo.png";

import "./style.css";

function Sidebar() {
  let [steps, setSteps] = useState(1);

  let allSteps = document.querySelectorAll(".step-form-cont");

  function nextStep() {
    setSteps(steps > 9 ? steps === 1 : (steps += 1));
  }

  function prevStep() {
    setSteps(steps === 0 ? (steps = 1) : (steps -= 1));
  }

  let elements;

  if (steps === 1) {
    elements = <UserInfo nextStepFunc={nextStep} prevStep={prevStep} />;
  } else if (steps === 2) {
    elements = <Address nextStepFunc={nextStep} prevStep={prevStep} />;
  } else if (steps === 3) {
    elements = <WorkExp nextStepFunc={nextStep} prevStep={prevStep} />;
  } else if (steps === 4) {
    elements = <Education nextStepFunc={nextStep} prevStep={prevStep} />;
  } else if (steps === 5) {
    elements = <Hobbies nextStepFunc={nextStep} prevStep={prevStep} />;
  } else if (steps === 6) {
    elements = <Quotes nextStepFunc={nextStep} prevStep={prevStep} />;
  } else if (steps === 7) {
    elements = <ProSkills nextStepFunc={nextStep} prevStep={prevStep} />;
  } else if (steps === 8) {
    elements = <PersonalSkills nextStepFunc={nextStep} prevStep={prevStep} />;
  } else if (steps === 9) {
    elements = <SocialLinks nextStepFunc={nextStep} prevStep={prevStep} />;
  } else if (steps === 10) {
    elements = <SidebarStyles nextStepFunc={nextStep} prevStep={prevStep} />;
  } else {
    elements = <UserInfo nextStepFunc={nextStep} prevStep={prevStep} />;
  }

  useEffect(() => {
    console.log("next step", allSteps.length, steps);
  }, [steps, setSteps]);

  return (
    <div className="sidebar-cont">
      <div className="top-head">
        {/* <HiDocumentDuplicate className="icon logo" /> */}
        <img src={logo} alt="" className="img-fluid logo" />
        <span>Quickr</span>
      </div>
      {elements}
    </div>
  );
}

export default Sidebar;
