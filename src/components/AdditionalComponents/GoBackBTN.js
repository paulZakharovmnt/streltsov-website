import React from "react";
import "./GoBackBTN.css";
import { Link } from "react-router-dom";

const GoBackBTN = ({ whereToLink, linkName }) => {
  return (
    <div className="go-back-btn">
      <Link className="backLink" to={whereToLink}>
        {linkName}
      </Link>
    </div>
  );
};

export default GoBackBTN;
