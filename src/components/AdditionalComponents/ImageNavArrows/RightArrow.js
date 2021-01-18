import React from "react";
import "./Arrows.css";

const RightArrow = ({ showNextImage }) => {
  return (
    <div className="right-arrow-container">
      <div className="arrow-right" onClick={showNextImage}>
        <div className="arrow-top"></div>
        <div className="arrow-bottom"></div>
      </div>
    </div>
  );
};

export default RightArrow;
