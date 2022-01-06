import React from "react";
import Preview from "../../comp/Preview/Preview";
import Sidebar from "../../comp/Sidebar/Sidebar";

function Home() {
  return (
    <div className="container-fluid">
      <Sidebar />

      <Preview />
    </div>
  );
}

export default Home;
