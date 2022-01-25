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
              <span>
                <HiBriefcase className="icon" />
              </span>
              <p className="work-exp">Work Experience</p>
            </div>
            <br />
            <div className="cards-container">
              {/* <div className="work-cards"> */}
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
                    Necessitatibus nemo ducimus laboriosam non atque quasi
                    sapiente, itaque reprehenderit? Ipsam, illo? Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Blanditiis
                    placeat minus voluptate enim veritatis eaque perspiciatis
                    asperiores quas iste eos.
                  </span>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
          {/* education */}
          <div className="education-exp">
            <div className="head">
              <HiBriefcase className="icon" />
              <p className="education-exp">Education</p>
            </div>
            <br />

            {[1, 2, 3].map((i) => {
              return (
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.? Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Hobbies */}
          <div className="hobbies">
            <div className="head">
              <HiBriefcase className="icon" />
              <p className="education-exp">Hobbies AND Experience</p>
            </div>
            <div className="body">
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Itaque
                voluptates laborum laboriosam, blanditiis facere quibusdam
                quaerat, quae ab ratione eveniet dolorem quos velit suscipit
                odio amet officiis aut expedita quasi!
              </span>
            </div>
          </div>
        </div>
        <div className="right-cont">
          {/* quotes */}
          <div className="quotes-cont">
            <HiLightBulb className="icon" />
            <br />
            <div className="body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum in dicta repellat molestiae ad provident qui. Dicta
              laboriosam minus tempora inventore deleniti vel, numquam
              cupiditate nulla sunt quia enim illo!
            </div>
          </div>
          {/* pro-skills */}
          <div className="pro-skills-cont">
            <h4>PRO SKILLS</h4>
            <br />
            <div className="skills-cont">
              {[1, 2, 3, 4].map((i) => {
                return (
                  <div className="skills-card" key={i}>
                    <span>Java</span>
                    <ProgressBar completed={10 * i} />
                  </div>
                );
              })}
            </div>
          </div>
          {/* Personal Skills */}
          <div className="personal-skills">
            <div className="head">
              <h5>Personal Skills</h5>
            </div>
            <div className="p-skills-cont">
              {[1, 2, 3, 4, 5, 6].map((i) => {
                return <span className="skill">Team</span>;
              })}
            </div>
          </div>
          {/* socials */}
          <div className="socials">
            <div className="head">
              <h5>Socials</h5>
            </div>
            <ul className="list">
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
              <li>
                <HiGlobeAlt className="icon" />
                <a
                  href="http://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://twitter.com
                </a>
              </li>
              <li>
                <HiGlobeAlt className="icon" />
                <a
                  href="http://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://github.com
                </a>
              </li>
              <li>
                <HiGlobeAlt className="icon" />
                <a
                  href="http://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://instagram.com
                </a>
              </li>
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
