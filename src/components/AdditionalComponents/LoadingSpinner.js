import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="spinner">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingSpinner;
