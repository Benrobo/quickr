import React, { useEffect, useState } from "react";
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
  let [steps, setSteps] = useState(1);

  let allSteps = document.querySelectorAll(".step-form-cont");

  function nextStep() {
    // setSteps(steps > allSteps.length ? (steps = 1) : steps++);
    setSteps(steps++);
  }

  function prevStep() {
    setSteps(steps === 0 ? (steps = 1) : steps--);
  }

  let elements;

  switch (steps) {
    case 1:
      elements = <UserInfo nextStepFunc={nextStep} prevStep={prevStep} />;
      break;

    case 2:
      elements = <WorkExp nextStepFunc={nextStep} prevStep={prevStep} />;
      break;

    case 3:
      elements = <Education nextStepFunc={nextStep} prevStep={prevStep} />;
      break;
    case 4:
      elements = <Hobbies nextStepFunc={nextStep} prevStep={prevStep} />;
      break;
    case 5:
      elements = <Quotes nextStepFunc={nextStep} prevStep={prevStep} />;
      break;
    case 6:
      elements = <ProSkills nextStepFunc={nextStep} prevStep={prevStep} />;
      break;
    case 7:
      elements = <SocialLinks nextStepFunc={nextStep} prevStep={prevStep} />;
      break;
    case 8:
      elements = <SidebarStyles nextStepFunc={nextStep} prevStep={prevStep} />;
      break;

    default:
      elements = <UserInfo nextStepFunc={nextStep} prevStep={prevStep} />;
      break;
  }

  useEffect(() => {
    console.log("next step", allSteps.length, steps);
  }, [steps, setSteps]);

  return (
    <div className="sidebar-cont">
      <div className="top-head">
        <HiDocumentDuplicate className="icon logo" />
        <span>ResumeBuilder</span>
      </div>

      {elements}

      {console.log(steps)}

      {/* <Address />
      <WorkExp />
      <Education />
      <Hobbies />
      <Quotes />
      <ProSkills />
      <PersonalSkills />
      <SocialLinks />
      <SidebarStyles /> */}
    </div>
  );
}

export default Sidebar;
