import React, { useState, useEffect, useContext } from "react";
import {
  HiPhone,
  HiMail,
  HiLocationMarker,
  HiBriefcase,
  HiBadgeCheck,
  HiLightBulb,
  HiGlobeAlt,
  HiPlusSm,
  HiMinusSm,
} from "react-icons/hi";

import ProgressBar from "../ProgressBar/ProgressBar";

import ZoomControl from "../ZoomControl/ZoomControl";
import DataContext from "../../context/DataContext";

import "./style.css";

function Default() {
  const [scale, setSCale] = useState(1);
  const [zoomState, setZoomState] = useState("in");
  const {
    fullname,
    jobtype,
    imageTemp,
    phonenumber,
    email,
    phoneType,
    address,
    jobStore,
    eduStore,
    hobbies,
    quotes,
    skillStore,
    pskillStore,
    socials,
  } = useContext(DataContext);

  useEffect(() => {
    let temp = document.querySelector(".template-view");
    if (zoomState === "in") {
      temp.style.transform = `scale(${scale})`;
    } else {
      temp.style.transform = `scale(${scale})`;
    }
    console.log(jobStore);
  }, [scale]);

  return (
    <>
      <div className="template-view mt-5">
        <div className="left-cont">
          {/* info */}
          <div className="top">
            <img
              src={
                imageTemp === ""
                  ? "https://avatars.dicebear.com/api/initials/john.svg"
                  : imageTemp
              }
              alt=""
              className="img-fluid"
            />
            <div className="info-cont">
              <div className="t">
                <h5 className="name">
                  {fullname === "" ? "John Doe" : fullname}
                </h5>
                <span className="job-type">
                  {jobtype === "" ? "Designer & Frontend Developer" : jobtype}
                </span>
              </div>
              <div className="b">
                <ul className="list">
                  <li>
                    <HiPhone className="icon" />
                    <span className="phone">
                      {phonenumber === "" || phoneType === ""
                        ? "+234 - 07084506679"
                        : `${phoneType} - ${phonenumber}`}
                    </span>
                  </li>
                  <li>
                    <HiMail className="icon" />
                    <span className="mail">
                      {email === "" ? "johndoe@mail.com" : email}
                    </span>
                  </li>
                  <li>
                    <HiLocationMarker className="icon" />
                    <span className="location">
                      {address === ""
                        ? "22, Alfred Str, United State"
                        : address}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* work exp */}
          <div className="work-exp">
            <div className="head">
              <HiBriefcase className="icon" />
              <span className="work-exp">Work Experience</span>
            </div>
            {jobStore !== undefined && jobStore.length > 0 ? (
              jobStore.map((list) => {
                return (
                  <div className="cards-container">
                    {/* <div className="work-cards"> */}
                    <div className="l">
                      <span className="year">{list.year}</span>
                      <HiBadgeCheck className="icon" />
                    </div>
                    <div className="r">
                      <div className="t">
                        <h5>{list.title}</h5>
                        <span className="location">{list.location}</span>
                      </div>
                      <br />
                      <div className="b mounted">
                        <span>{list.experience.replace('"', "")}</span>
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                );
              })
            ) : (
              <div className="cards-container">
                <div className="l">
                  <span className="year">2015</span>
                  <HiBadgeCheck className="icon" />
                </div>
                <div className="r">
                  <div className="t">
                    <h5>HR MANAGER</h5>
                    <span className="location">Location here</span>
                  </div>
                  <br />
                  <div className="b">
                    <span>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Deleniti, quidem illum nulla ut nostrum placeat laboriosam
                      excepturi laudantium doloremque dignissimos.
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* education */}
          <div className="education-exp">
            <div className="head">
              <HiBriefcase className="icon" />
              <span className="education-exp">Education</span>
            </div>
            {eduStore !== undefined && eduStore.length > 0 ? (
              eduStore.map((list, i) => {
                return (
                  <div className="cards-container">
                    <div className="l">
                      <span className="year">{list.year}</span>
                      <HiBadgeCheck className="icon" />
                    </div>
                    <div className="r">
                      <div className="t">
                        <h5>{list.title}</h5>
                      </div>
                      <div className="b">
                        <span>{list.experience}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="cards-container">
                <div className="l">
                  <span className="year">2015</span>
                  <HiBadgeCheck className="icon" />
                </div>
                <div className="r">
                  <div className="t">
                    <h5>A.S Business Admin</h5>
                  </div>
                  <br />
                  <div className="b">
                    <span>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.?
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Hobbies */}
          <div className="hobbies">
            <div className="head">
              <HiBriefcase className="icon" />
              <span className="hobbies-exp">Hobbies & Experience</span>
            </div>
            <div className="body">
              {hobbies === "" ? (
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti, quia.
                </span>
              ) : (
                <div className="mounted">
                  <span>{hobbies}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="right-cont">
          {/* quotes */}
          <div className="quotes-cont">
            <HiLightBulb className="icon" />
            <br />
            <div className="body">
              {quotes == "" ? (
                <>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis quae ipsa, porro harum quia tempore itaque nulla
                  laborum atque minus!
                </>
              ) : (
                quotes
              )}
            </div>
          </div>
          {/* pro-skills */}
          <div className="pro-skills-cont">
            <h4>PRO SKILLS</h4>
            <br />
            <div className="skills-cont">
              {skillStore.length > 0 ? (
                skillStore.map((list, i) => {
                  return (
                    <div className="skills-card" key={list.id}>
                      <span>{list.name}</span>
                      <ProgressBar completed={list.level} />
                    </div>
                  );
                })
              ) : (
                <div className="skills-card">
                  <span>Python</span>
                  <ProgressBar completed={50} />
                </div>
              )}
            </div>
          </div>
          {/* Personal Skills */}
          <div className="personal-skills">
            <div className="head">
              <h5>Personal Skills</h5>
            </div>
            <div className="p-skills-cont">
              {pskillStore.length > 0 ? (
                pskillStore.map((skill, i) => {
                  return (
                    <span className="skill" key={i}>
                      {skill}
                    </span>
                  );
                })
              ) : (
                <span className="skill">Team</span>
              )}
            </div>
          </div>
          {/* socials */}
          <div className="socials">
            <div className="head">
              <h5>Socials</h5>
            </div>
            <ul className="list">
              {socials.length > 0 ? (
                socials.map((list, i) => {
                  return (
                    <li key={list.id}>
                      <HiGlobeAlt className="icon" />
                      <a
                        href={list.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {list.url}
                      </a>
                    </li>
                  );
                })
              ) : (
                <li>
                  <HiGlobeAlt className="icon" />
                  <a
                    href="http://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://facebook.com
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="space"></div>
      <ZoomControl setSCale={setSCale} setZoomState={setZoomState} />
    </>
  );
}

export default Default;
