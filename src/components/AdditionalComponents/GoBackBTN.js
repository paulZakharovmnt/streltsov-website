import React from "react";
import "./GoBackBTN.css";
import { Link } from "react-router-dom";

const GoBackBTN = () => {
  return (
    <div className="go-back-btn">
      <Link className="backLink" to={`/products`}>
        Back to List
      </Link>
    </div>
  );
};

export default GoBackBTN;
