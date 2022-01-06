import React from "react";
import Preview from "../../comp/Preview/Preview";
import Sidebar from "../../comp/Sidebar/Sidebar";

function Home() {
  return (
    <div className="cont">
      <Sidebar />
      <Preview />
    </div>
  );
}

export default Home;
