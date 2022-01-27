import React, { useContext, useState } from "react";
import { HiUpload } from "react-icons/hi";
import code from "../../helpers/phonenumbers.json";

import "./style.css";

import DataContext from "../../context/DataContext";
import { Notification } from "../../helpers/util";
import Badge from "./badge";

const notif = new Notification(3000);

export function UserInfo({ nextStepFunc }) {
  const {
    fullname,
    jobtype,
    imageTemp,
    setTempImage,
    setJobType,
    setFullname,
  } = useContext(DataContext);

  function handleImage() {
    let fileInput = document.querySelector(".file");
    fileInput.click();

    fileInput.addEventListener("change", (e) => {
      let imageExt = ["png", "PNG", "jpeg", "JPEG", "jpg", "JPG", "svg", "SVG"];

      let type = fileInput.files[0].type.split("/")[1];

      if (imageExt.includes(type) === false) {
        notif.error("Image type selected is invalid");
        return;
      }
      let url = URL.createObjectURL(fileInput.files[0]);
      setTempImage(url);
    });
  }

  return (
    <div className="step-form-cont step1">
      <br />
      <div className="info-container">
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
          <input type="file" className="file" hidden />
          <div className="span upload-box">
            <HiUpload className="icon" onClick={handleImage} />
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
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              value={fullname ? fullname : ""}
            />
            <input
              type="text"
              placeholder="Job Type"
              maxLength={20}
              onChange={(e) => {
                setJobType(e.target.value);
              }}
              className="inp form-control"
              value={jobtype ? jobtype : ""}
            />
          </div>
          <div className="action-cont">
            <button
              className="btn next-btn"
              onClick={(e) => {
                if (fullname === "" || jobtype === "") {
                  return notif.error("pls fill in all fields");
                }
                if (imageTemp === "") {
                  return notif.error("Image isnt selected");
                }
                nextStepFunc();
              }}
            >
              Continue
            </button>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export function Address({ nextStepFunc, prevStep }) {
  const {
    phoneType,
    phonenumber,
    email,
    address,
    setPhoneType,
    setPhoneNumber,
    setEmail,
    setAddress,
  } = useContext(DataContext);

  return (
    <div className="step-form-cont step1">
      <br />
      <div className="info-container address">
        <div className="bottom-cont">
          <div className="box box-1">
            <h3>Address</h3>
            <br />
            <div className="join-cont">
              <select
                className="phonetype sel"
                onChange={(e) => {
                  setPhoneType(e.target.value);
                }}
              >
                {code.map((elm, i) => {
                  return (
                    <option value={elm.E164} key={i}>
                      +{elm.E164} {elm["Country Name"]}
                    </option>
                  );
                })}
              </select>
              <input
                type="number"
                placeholder="Phonenumber"
                className="inp form-control"
                defaultValue={phonenumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="inp form-control"
              defaultValue={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Full Address"
              maxLength={50}
              className="inp form-control"
              defaultValue={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <br />
            {/* <button className="btn addbtn">Add Info</button> */}
          </div>
          <div className="action-cont">
            <button className="btn back-btn" onClick={prevStep}>
              Back
            </button>
            <button
              className="btn next-btn"
              onClick={() => {
                console.log(phoneType);
                if (phoneType === "") {
                  return notif.error("country code is missing");
                } else if (phonenumber === "") {
                  return notif.error("phonenumber cant be empty");
                } else if (email === "") {
                  return notif.error("email cant be empty");
                } else if (address === "") {
                  return notif.error("address cant be empty");
                }
                nextStepFunc();
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkExp({ nextStepFunc, prevStep }) {
  const {
    jobyear,
    jobtitle,
    jobLocation,
    jobexp,
    jobStore,
    setJobYear,
    setJobLocation,
    setJobExp,
    setJobStore,
    setJobTitle,
  } = useContext(DataContext);

  let jobMemory = {};

  const genId = () => {
    let char = "ABCDefghi09546".split("");
    let str = "";
    for (let i = 0; i < 5 + 1; i++) {
      const rand = Math.floor(Math.random() * char.length);

      str += char[rand];
    }
    return str;
  };

  function handleForm() {
    // validate
    if (jobyear === "") {
      return notif.error("job year cant be empty");
    }
    if (jobtitle === "") {
      return notif.error("job title cant be empty");
    }
    if (jobLocation === "") {
      return notif.error("job location cant be empty");
    }
    if (jobexp === "") {
      return notif.error("job experience cant be empty");
    }

    jobMemory = {
      id: genId(),
      year: jobyear,
      title: jobtitle,
      location: jobLocation,
      experience: jobexp,
    };

    setJobStore([...jobStore, jobMemory]);
  }

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
                defaultValue={jobyear}
                onChange={(e) => {
                  setJobYear(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Job Title"
                className="inp form-control"
                defaultValue={jobtitle}
                onChange={(e) => {
                  setJobTitle(e.target.value);
                }}
              />
            </div>
            <input
              type="text"
              maxLength={50}
              placeholder="Location"
              className="inp form-control"
              defaultValue={jobLocation}
              onChange={(e) => {
                setJobLocation(e.target.value);
              }}
            />
            <textarea
              cols="30"
              rows="2"
              className="inp form-control expText"
              defaultValue={jobexp}
              onChange={(e) => {
                setJobExp(e.target.value);
              }}
            ></textarea>
            <br />
            <div className="badge-container d-flex flex-wrap">
              <Badge list={jobStore} deleteItem={setJobStore} />
            </div>
            <button className="btn addbtn" onClick={handleForm}>
              Add Experience
            </button>
          </div>
          <div className="action-cont">
            <button className="btn back-btn" onClick={prevStep}>
              Back
            </button>
            <button
              className="btn next-btn"
              onClick={() => {
                nextStepFunc();
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Education({ nextStepFunc, prevStep }) {
  const {
    eduYear,
    eduName,
    eduExp,
    eduStore,
    setEduYear,
    setEducationName,
    setEduExp,
    setEduStore,
  } = useContext(DataContext);

  let eduMemory = {};

  const genId = () => {
    let char = "ABCDefghi09546".split("");
    let str = "";
    for (let i = 0; i < 5 + 1; i++) {
      const rand = Math.floor(Math.random() * char.length);

      str += char[rand];
    }
    return str;
  };

  function handleForm() {
    // validate
    if (eduYear === "") {
      return notif.error("education year cant be empty");
    }
    if (eduName === "") {
      return notif.error("education name cant be empty");
    }
    if (eduExp === "") {
      return notif.error("education experience cant be empty");
    }

    eduMemory = {
      id: genId(),
      year: eduYear,
      title: eduName,
      experience: eduExp,
    };

    setEduStore([...eduStore, eduMemory]);
  }

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
                defaultValue={eduYear}
                onChange={(e) => {
                  setEduYear(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="School Name"
                className="inp form-control"
                defaultValue={eduName}
                onChange={(e) => {
                  setEducationName(e.target.value);
                }}
              />
            </div>
            <textarea
              cols="30"
              rows="3"
              maxLength={400}
              placeholder="Education"
              className="inp form-control expText"
              defaultValue={eduExp}
              onChange={(e) => {
                setEduExp(e.target.value);
              }}
            ></textarea>
            <div className="badge-container d-flex flex-wrap">
              <Badge list={eduStore} deleteItem={setEduStore} />
            </div>
            <button className="btn addbtn" onClick={handleForm}>
              Add Education
            </button>
          </div>
          <div className="action-cont">
            <button className="btn back-btn" onClick={prevStep}>
              Back
            </button>
            <button
              className="btn next-btn"
              onClick={() => {
                // if (nextState === false) {
                //   return notif.error("you forgot to add the details");
                // }
                nextStepFunc();
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hobbies({ nextStepFunc, prevStep }) {
  const { hobbies, setHobbies } = useContext(DataContext);

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
              defaultValue={hobbies}
              onChange={(e) => setHobbies(e.target.value)}
            ></textarea>
            <br />
          </div>
          <div className="action-cont">
            <button className="btn back-btn" onClick={prevStep}>
              Back
            </button>
            <button
              className="btn next-btn"
              onClick={() => {
                if (hobbies === "") {
                  return notif.error("input cant be empty");
                }
                nextStepFunc();
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Quotes({ nextStepFunc, prevStep }) {
  const { quotes, setQuotes } = useContext(DataContext);

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
              defaultValue={quotes}
              onChange={(e) => setQuotes(e.target.value)}
            ></textarea>
            <br />
          </div>
          <div className="action-cont">
            <button className="btn back-btn" onClick={prevStep}>
              Back
            </button>
            <button
              className="btn next-btn"
              onClick={() => {
                if (quotes === "") {
                  return notif.error("inputs cant be empty");
                }
                nextStepFunc();
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProSkills({ nextStepFunc, prevStep }) {
  const {
    skillname,
    skillLevel,
    skillStore,
    setSkillname,
    setSkillLevel,
    setSkillStore,
  } = useContext(DataContext);

  let skillMemory = {};

  const genId = () => {
    let char = "ABCDefghi09546".split("");
    let str = "";
    for (let i = 0; i < 5 + 1; i++) {
      const rand = Math.floor(Math.random() * char.length);

      str += char[rand];
    }
    return str;
  };

  function handleForm() {
    // validate
    if (skillname === "") {
      return notif.error("skill name cant be empty");
    }
    if (skillLevel === "") {
      return notif.error("skill name cant be empty");
    }

    skillMemory = {
      id: genId(),
      name: skillname,
      level: skillLevel,
    };

    setSkillStore([...skillStore, skillMemory]);
  }

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
              max={3}
              step={1}
              maxLength={3}
              minLength={1}
              defaultValue={skillLevel}
              onChange={(e) => setSkillLevel(e.target.value)}
            />
            <input
              type="text"
              placeholder="Skill Name"
              className="inp form-control"
              maxLength={150}
              defaultValue={skillname}
              onChange={(e) => setSkillname(e.target.value)}
            />
            <br />
            <div className="badge-container d-flex flex-wrap">
              <Badge list={skillStore} deleteItem={setSkillStore} />
            </div>
            <button className="btn addbtn" onClick={handleForm}>
              Add Pro Skill
            </button>
          </div>
          <div className="action-cont">
            <button className="btn back-btn" onClick={prevStep}>
              Back
            </button>
            <button className="btn next-btn" onClick={nextStepFunc}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PersonalSkills({ nextStepFunc, prevStep }) {
  const { personalSkill, setPersonalSkill, setPersonalStore } =
    useContext(DataContext);

  function handleForm() {
    // validate
    if (personalSkill === "") {
      return notif.error("input cant be empty");
    }

    let pskill = personalSkill
      .trim()
      .replace(/^\s+|\s+$/gm, "")
      .split(",");

    setPersonalStore([...pskill]);
  }

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
              defaultValue={personalSkill}
              onChange={(e) => setPersonalSkill(e.target.value)}
            ></textarea>
            <br />
            <button className="btn addbtn" onClick={handleForm}>
              Add P-Skills
            </button>
          </div>
          <div className="action-cont">
            <button className="btn back-btn" onClick={prevStep}>
              Back
            </button>
            <button className="btn next-btn" onClick={nextStepFunc}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SocialLinks({ nextStepFunc, prevStep }) {
  const { socials, setSocials } = useContext(DataContext);
  const [url, setUrl] = useState("https://twitter.com/AlumonaBenaiah");

  function validUrl(text) {
    try {
      let url = new URL(text);
      return url.protocol ? true : false;
    } catch (err) {
      return false;
    }
  }
  const genId = () => {
    let char = "ABCDefghi09546".split("");
    let str = "";
    for (let i = 0; i < 5 + 1; i++) {
      const rand = Math.floor(Math.random() * char.length);

      str += char[rand];
    }
    return str;
  };

  function handleForm() {
    if (url === "") {
      return notif.error("provide at least one url");
    }
    if (validUrl(url) === false && url !== "") {
      return notif.error("facebook url is invalid");
    }

    let linkstore = {
      id: genId(),
      url,
    };

    setSocials([...socials, linkstore]);
  }

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
              placeholder="urls"
              className="inp form-control"
              maxLength="70"
              defaultValue={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
            <br />
            <div className="badge-container d-flex flex-wrap">
              <Badge list={socials} deleteItem={setSocials} />
            </div>
            <button className="btn addbtn" onClick={handleForm}>
              Add Links
            </button>
          </div>
          <div className="action-cont">
            <button className="btn back-btn" onClick={prevStep}>
              Back
            </button>
            <button
              className="btn next-btn"
              onClick={() => {
                if (url === "") {
                  return notif.error("provide at least one url");
                }
                nextStepFunc();
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SidebarStyles({ nextStepFunc, prevStep }) {
  const { saveData } = useContext(DataContext);

  return (
    <div className="step-form-cont step1">
      <br />
      <div className="info-container address">
        <div className="bottom-cont">
          <div className="box box-1">
            <h3>Sidebar Styles</h3>
            <br />
            <input
              type="color"
              className="inp colors"
              defaultValue={"#ff00ea"}
            />
            <br />
            <h3>Text Styles</h3>
            <br />
            <input
              type="color"
              className="inp colors"
              defaultValue={"#ff0000"}
            />
            <br />
          </div>
          <div className="action-cont">
            <button className="btn back-btn" onClick={prevStep}>
              Back
            </button>
            <button
              className="btn next-btn"
              onClick={() => {
                saveData();
                notif.success("All Data has been saved successfully");
                nextStepFunc();
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
