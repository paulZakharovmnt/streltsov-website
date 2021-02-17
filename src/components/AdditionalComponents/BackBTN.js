import React from "react";
import { Link } from "react-router-dom";

const BackBTN = ({ breadcrumbs }) => {
  return (
    <Link
      to={`${breadcrumbs[breadcrumbs.length - 2].key}`}
      className="back-crumb"
    >
      <div className="round">
        <div id="cta">
          <span className="arrow primera next "></span>
          <span className="arrow segunda next "></span>
        </div>
      </div>
      <p>Back</p>
    </Link>
  );
};

export default BackBTN;
