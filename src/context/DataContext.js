import React, { createContext, useState, useEffect } from "react";

const DataContext = createContext();

export default DataContext;

export function DataContextProvider({ children }) {
  const [mainStore, setMainStore] = useState([]);

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
  const [skillObj, setSkillObj] = useState({});
  const [skillStore, setSkillStore] = useState([]);
  // personal skill
  const [personalSKill, setPersonalSKill] = useState("");

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
        skillObj,
        skillStore,
        personalSKill,
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
        setSkillObj,
        setSkillStore,
        setPersonalSKill,
        setTempImage,
        setJobType,
        setFullname,
        setJobYear,
        setJobLocation,
        setJobExp,
        setJobTitle,
        setEduYear,
        setEducationName,
        setEduExp,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
