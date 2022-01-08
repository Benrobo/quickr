import React from "react";

function ProgressBar({ completed }) {
  return (
    <div className="main-cont" style={progressMainStyles}>
      <div
        className="body-cont"
        style={{
          backgroundColor: "var(--yel)",
          width: `${completed}%`,
          left: "0px",
          top: "0px",
          height: "100%",
          fontSize: "10px",
          padding: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {completed}%
      </div>
    </div>
  );
}

const progressMainStyles = {
  width: "100%",
  height: "15px",
  padding: 0,
  margin: 0,
  backgroundColor: "var(--dark-m)",
  position: "relative",
  border: "1px solid var(--yel)",
};

export default ProgressBar;
