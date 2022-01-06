import React from "react";
import { HiUpload, HiChevronDown } from "react-icons/hi";

import "./style.css";

export function Step1() {
  return (
    <div className="step-form-cont step1">
      <h3>Generate Your Resume</h3>
      <br />
      <div className="info-container">
        <div className="top">
          <img
            src="https://avatars.dicebear.com/api/initials/john.svg"
            alt=""
            className="img-fluid"
          />
          <input type="file" hidden />
          <div className="span upload-box">
            <HiUpload className="icon" />
          </div>
        </div>
        {/* body */}
        <div className="bottom-cont">
          <div className="box box-1">
            <h3>User Info</h3>
            <br />
            <input
              type="text"
              placeholder="First and Lastname"
              maxLength={20}
              className="inp"
            />
            <input
              type="text"
              placeholder="Job Type"
              maxLength={20}
              className="inp"
            />
          </div>
          <div className="box box-1">
            <h3>Address</h3>
            <br />
            <div className="join-cont">
              <select className="phonetype">
                <option value="+234">+234</option>
              </select>
              <input type="number" placeholder="Phonenumber" className="inp" />
            </div>
            <input type="email" placeholder="Email" className="inp" />
            <input
              type="text"
              placeholder="Full Address"
              maxLength={50}
              className="inp"
            />
            <br />
            <button className="btn">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Step2() {
  return <div className="step-form-cont step2">Step2</div>;
}

export function Step3() {
  return <div className="step-form-cont step3">Step3</div>;
}
