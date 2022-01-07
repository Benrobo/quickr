import React from "react";
import { HiUpload, HiChevronDown } from "react-icons/hi";

import "./style.css";

export function UserInfo() {
  return (
    <div className="step-form-cont step1">
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
            <input
              type="text"
              placeholder="First and Lastname"
              maxLength={20}
              className="inp form-control"
            />
            <input
              type="text"
              placeholder="Job Type"
              maxLength={20}
              className="inp form-control"
            />
            <button className="btn addbtn">Add Info</button>
          </div>
          <div className="action-cont">
            <button className="btn next-btn">Continue</button>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export function Address() {
  return (
    <div className="step-form-cont step1">
      <br />
      <div className="info-container address">
        <div className="bottom-cont">
          <div className="box box-1">
            <h3>Address</h3>
            <br />
            <div className="join-cont">
              <select className="phonetype form-controls">
                <option value="+234">+234</option>
              </select>
              <input
                type="number"
                placeholder="Phonenumber"
                className="inp form-control"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="inp form-control"
            />
            <input
              type="text"
              placeholder="Full Address"
              maxLength={50}
              className="inp form-control"
            />
            <br />
            <button className="btn addbtn">Add Info</button>
          </div>
          <div className="action-cont">
            <button className="btn back-btn">Back</button>
            <button className="btn next-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Step3() {
  return <div className="step-form-cont step3">Step3</div>;
}
