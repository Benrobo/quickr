import React, { useContext } from "react";
import Default from "../../comp/Templates/Default";
import Sidebar from "../../comp/Sidebar/Sidebar";
import { HiMenuAlt1 } from "react-icons/hi";

import "./style.css";

import DataContext from "../../context/DataContext";

const ref = React.createRef();

function Home() {
  const { downloadAsPdf } = useContext(DataContext);

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
        <div className="templates-container" ref={ref}>
          <Default tref={"ref"} />
        </div>
      </div>
    </div>
  );
}

export default Home;
