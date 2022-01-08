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
              <select className="phonetype sel">
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

export function WorkExp() {
  return (
    <div className="step-form-cont step1">
      <br />
      <div className="info-container address">
        <div className="bottom-cont">
          <div className="box box-1">
            <h3>Work Experience</h3>
            <br />
            <div className="join-cont">
              <input
                type="number"
                min="1900"
                max="2099"
                step="1"
                placeholder="2016"
                className="date sel"
              />
              <input
                type="number"
                placeholder="Job Title"
                className="inp form-control"
              />
            </div>
            <input
              type="email"
              maxLength={50}
              placeholder="Location"
              className="inp form-control"
            />
            <textarea
              cols="30"
              rows="3"
              className="inp form-control expText"
            ></textarea>
            <br />
            <button className="btn addbtn">Add Experience</button>
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

export function Education() {
  return (
    <div className="step-form-cont step1">
      <br />
      <div className="info-container address">
        <div className="bottom-cont">
          <div className="box box-1">
            <h3>Education</h3>
            <br />
            <div className="join-cont">
              <input
                type="number"
                min="1900"
                max="2099"
                step="1"
                placeholder="2016"
                className="date sel"
              />
              <input
                type="number"
                placeholder="SChool Name"
                className="inp form-control"
              />
            </div>
            <textarea
              cols="30"
              rows="3"
              maxLength={400}
              placeholder="Education"
              className="inp form-control expText"
            ></textarea>
            <br />
            <button className="btn addbtn">Add Education</button>
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

export function Hobbies() {
  return (
    <div className="step-form-cont step1">
      <br />
      <div className="info-container address">
        <div className="bottom-cont">
          <div className="box box-1">
            <h3>Hobbies & Interest</h3>
            <br />
            <textarea
              cols="30"
              rows="3"
              maxLength={300}
              className="inp form-control expText"
              placeholder="Add your hobbies and interest"
            ></textarea>
            <br />
            <button className="btn addbtn">Add Hobbies</button>
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

export function Quotes() {
  return (
    <div className="step-form-cont step1">
      <br />
      <div className="info-container address">
        <div className="bottom-cont">
          <div className="box box-1">
            <h3>Motivational Quotes</h3>
            <br />
            <textarea
              cols="30"
              rows="3"
              maxLength={300}
              className="inp form-control expText"
              placeholder="Add Qotes"
            ></textarea>
            <br />
            <button className="btn addbtn">Add Quotes</button>
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

export function ProSkills() {
  return (
    <div className="step-form-cont step1">
      <br />
      <div className="info-container address">
        <div className="bottom-cont">
          <div className="box box-1">
            <h3>Pro Skills</h3>
            <br />
            <input
              type="number"
              placeholder="rate: 1-100"
              className="inp form-control"
              min={1}
              max={100}
              step={1}
              maxLength="3"
              minLength={1}
            />
            <input
              type="text"
              placeholder="Skill Name"
              className="inp form-control"
              maxLength={150}
            />
            <br />
            <button className="btn addbtn">Add Pro Skill</button>
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

export function PersonalSkills() {
  return (
    <div className="step-form-cont step1">
      <br />
      <div className="info-container address">
        <div className="bottom-cont">
          <div className="box box-1">
            <h3>Personal Skills</h3>
            <br />
            <textarea
              cols="30"
              rows="3"
              maxLength={300}
              className="inp form-control expText"
              placeholder="add personal skills seperated by comma. (,)"
            ></textarea>
            <br />
            <button className="btn addbtn">Add P-Skills</button>
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

export function SocialLinks() {
  return (
    <div className="step-form-cont step1">
      <br />
      <div className="info-container address">
        <div className="bottom-cont">
          <div className="box box-1">
            <h3>Social Links</h3>
            <br />
            <input
              type="url"
              placeholder="facebook"
              className="inp form-control"
              maxLength="200"
            />
            <input
              type="url"
              placeholder="twitter"
              className="inp form-control"
              maxLength="200"
            />
            <input
              type="url"
              placeholder="github"
              className="inp form-control"
              maxLength="200"
            />
            <input
              type="url"
              placeholder="instagram"
              className="inp form-control"
              maxLength="200"
            />
            <br />
            <button className="btn addbtn">Add Links</button>
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

export function SidebarStyles() {
  return (
    <div className="step-form-cont step1">
      <br />
      <div className="info-container address">
        <div className="bottom-cont">
          <div className="box box-1">
            <h3>Sidebar Styles</h3>
            <br />
            <input type="color" className="inp colors" value={"#ff00ea"} />
            <br />
            <h3>Text Styles</h3>
            <br />
            <input type="color" className="inp colors" value={"#ff0000"} />
            <br />
          </div>
          <div className="action-cont">
            <button className="btn back-btn">Back</button>
            <button className="btn next-btn">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
