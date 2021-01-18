import React from "react";
import "./Arrows.css";

const LeftArrow = ({ showPrevImage }) => {
  return (
    <div className="left-arrow-container">
      <div className="arrow-left" onClick={showPrevImage}>
        <div className="arrow-top"></div>
        <div className="arrow-bottom"></div>
      </div>
    </div>
  );
};

export default LeftArrow;
