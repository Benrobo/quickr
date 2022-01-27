import React, { createContext, useState } from "react";
import { savePDF } from "@progress/kendo-react-pdf";

const DataContext = createContext();

export default DataContext;

export function DataContextProvider({ children }) {
  let LocalData;

  // user info
  const [fullname, setFullname] = useState("");
  const [jobtype, setJobType] = useState("");
  const [imageTemp, setTempImage] = useState("");
  // address
  const [phoneType, setPhoneType] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  // workexp
  const [jobyear, setJobYear] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobtitle, setJobTitle] = useState("");
  const [jobexp, setJobExp] = useState("");
  const [jobStore, setJobStore] = useState([]);
  // education
  const [eduYear, setEduYear] = useState("");
  const [eduName, setEducationName] = useState("");
  const [eduExp, setEduExp] = useState("");
  const [eduStore, setEduStore] = useState([]);
  // hobbies
  const [hobbies, setHobbies] = useState("");
  // quotes
  const [quotes, setQuotes] = useState("");
  // pro skills
  const [skillname, setSkillname] = useState("");
  const [skillLevel, setSkillLevel] = useState(0);
  const [skillStore, setSkillStore] = useState([]);
  // personal skill
  const [personalSkill, setPersonalSkill] = useState("");
  const [pskillStore, setPersonalStore] = useState([]);

  // socials
  const [socials, setSocials] = useState([]);

  // save all inputs data to localstorage
  function saveData() {
    LocalData = {
      userinfo: {
        fullname,
        imageTemp,
        phoneType,
        phonenumber,
        email,
        address,
      },
      workData: jobStore,
      educationData: eduStore,
      hobbies,
      quotes,
      skillData: skillStore,
      personalSkillData: pskillStore,
      socials,
    };

    window.localStorage.setItem("quickr-data", JSON.stringify(LocalData));
  }

  // download resume as pdf
  function downloadAsPdf(DomNode) {
    savePDF(DomNode, {
      paperSize: "auto",
      margin: 40,
      fileName: `quickr-${new Date().getDay()}`,
    });
  }

  return (
    <DataContext.Provider
      value={{
        fullname,
        jobtype,
        imageTemp,
        jobtitle,
        jobyear,
        jobLocation,
        jobexp,
        eduName,
        eduYear,
        eduExp,
        phoneType,
        phonenumber,
        email,
        address,
        jobStore,
        eduStore,
        hobbies,
        quotes,
        skillname,
        skillLevel,
        skillStore,
        personalSkill,
        pskillStore,
        socials,
        setPhoneType,
        setPhoneNumber,
        setEmail,
        setAddress,
        setJobStore,
        setEducationName,
        setEduStore,
        setHobbies,
        setQuotes,
        setSkillname,
        setSkillLevel,
        setSkillStore,
        setPersonalSkill,
        setPersonalStore,
        setTempImage,
        setJobType,
        setFullname,
        setJobYear,
        setJobLocation,
        setJobExp,
        setJobTitle,
        setEduYear,
        setEduExp,
        setSocials,
        saveData,
        downloadAsPdf,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
