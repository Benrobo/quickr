import React, { useState, useEffect } from "react";

import {  HiPlusSm,
    HiMinusSm} from "react-icons/hi"


function ZoomControl({ setSCale, setZoomState }) {
  let [zoomP, setZoomP] = useState(1);
  let count = -1;
  let zoomPlus = [1.0, 1.4, 1.6, 1.8];
  let zoomNeg = [0.5, 0.4, 0.3, 0.2, 0.1];

  useEffect(() => {
    setSCale(zoomP);
  }, [zoomP, setZoomP]);

  return (
    <div className="zoom-cont">
      <HiPlusSm
        className="icon"
        onClick={() => {
          count > 4 ? (count = 0) : count++;
          setZoomP(zoomPlus[count]);
          setZoomState("in");
        }}
      />
      <HiMinusSm
        className="icon"
        onClick={() => {
          count > 4 ? (count = 0) : count++;
          setZoomP(zoomNeg[count]);
          setZoomState("out");
        }}
      />
    </div>
  );
}

export default ZoomControl;
