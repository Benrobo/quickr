import React, { useContext, useState, useEffect } from "react";
import { HiUpload, HiChevronDown } from "react-icons/hi";
import code from "../../helpers/phonenumbers.json";

import "./style.css";

import DataContext from "../../context/DataContext";
import { Notification } from "../../helpers/util";
import Badge from "./badge";

const notif = new Notification(3000);

export function UserInfo({ nextStepFunc }) {
  const [image, setImage] = useState("");

  const { fullname, jobtype, setTempImage, setJobType, setFullname } =
    useContext(DataContext);

  function handleImage() {
    let fileInput = document.querySelector(".file");
    fileInput.click();

    fileInput.addEventListener("change", (e) => {
      let imageExt = ["png", "PNG", "jpeg", "JPEG", "jpg", "JPG", "svg", "SVG"];

      let type = fileInput.files[0].type.split("/")[1];

      if (imageExt.includes(type) === false) {
        setImage("");
        notif.error("Image type selected is invalid");
        return;
      }
      let url = URL.createObjectURL(fileInput.files[0]);
      setImage(url);
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
              image === ""
                ? "https://avatars.dicebear.com/api/initials/john.svg"
                : image
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
            {/* <button className="btn addbtn">Add Info</button> */}
          </div>
          <div className="action-cont">
            <button
              className="btn next-btn"
              onClick={(e) => {
                if (fullname === "" || jobtype === "") {
                  return notif.error("pls fill in all fields");
                }
                if (image === "") {
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
                if (phoneType == "") {
                  return notif.error("country code is missing");
                } else if (phonenumber == "") {
                  return notif.error("phonenumber cant be empty");
                } else if (email == "") {
                  return notif.error("email cant be empty");
                } else if (address == "") {
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

  // const [list, setList] = useState([]);
  const [jobstate, setJobState] = useState(false);
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
    setJobState(true);
  }

  useEffect(() => {
    console.log(jobStore);
  }, [jobStore]);

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
                onChange={(e) => {
                  setJobYear(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Job Title"
                className="inp form-control"
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
              onChange={(e) => {
                setJobLocation(e.target.value);
              }}
            />
            <textarea
              cols="30"
              rows="2"
              className="inp form-control expText"
              onChange={(e) => {
                setJobExp(e.target.value);
              }}
            ></textarea>
            <br />
            {jobstate && (
              <div className="badge-container d-flex flex-wrap">
                <Badge list={jobStore} deleteItem={setJobStore} />
              </div>
            )}
            <button className="btn addbtn" onClick={handleForm}>
              Add Experience
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

export function Education({ nextStepFunc, prevStep }) {
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

export function Hobbies({ nextStepFunc, prevStep }) {
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

export function Quotes({ nextStepFunc, prevStep }) {
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

export function ProSkills({ nextStepFunc, prevStep }) {
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

export function SidebarStyles({ nextStepFunc, prevStep }) {
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
            <button className="btn back-btn" onClick={prevStep}>
              Back
            </button>
            <button className="btn next-btn" onClick={nextStepFunc}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
