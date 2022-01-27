import React, { useContext, useEffect, useState } from "react";
import Default from "../../comp/Templates/Default";
import Sidebar from "../../comp/Sidebar/Sidebar";
import { HiMenuAlt1, HiExclamation } from "react-icons/hi";
import logo from "../../logo.png";
import "./style.css";

import DataContext from "../../context/DataContext";

const ref = React.createRef();

function Home() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [width, setWidth] = useState(0);
  const { downloadAsPdf } = useContext(DataContext);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handlePdfDownload() {
    let template = document.querySelector("[data-template-view]");
    downloadAsPdf(template);
  }

  return (
    <div className="home-cont">
      <Sidebar />
      <div className="main">
        <div className="top-bar">
          <h3>Generate Resume</h3>
          <div className="right">
            <button
              className="btn download"
              onClick={() => {
                handlePdfDownload();
              }}
            >
              Download
            </button>
            <HiMenuAlt1 className="icon" />
          </div>
        </div>
        {windowDimensions.width < 768 ? <DeviceSupport /> : ""}
        <div className="templates-container" ref={ref}>
          <Default tref={"ref"} />
        </div>
      </div>
    </div>
  );
}

export default Home;

function DeviceSupport() {
  return (
    <>
      <div className="device-main">
        <img src={logo} alt="" />
        <br />
        <h1>
          Sorry. <HiExclamation className="icon" />
        </h1>
        <p>Mobile Device not yet supported.</p>
        <br />
        <button
          className="btn home"
          onClick={() => {
            window.open("https://github.com/benrobo/quickr");
          }}
        >
          Visit Quickr
        </button>
      </div>
    </>
  );
}
