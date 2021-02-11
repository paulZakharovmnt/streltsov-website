import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from "react-router-dom";
import "./BreadCrumbs.css";

const BreadCrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <div className="breadCrumbs-container">
      {breadcrumbs.length <= 2 ? null : (
        <div className="breadCrumbs">
          <Link
            to={`${breadcrumbs[breadcrumbs.length - 3].key}`}
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
          {breadcrumbs.slice(1, breadcrumbs.length - 1).map((crumb) => (
            <div key={crumb.key} className="crumb-box">
              {" "}
              <Link to={`${crumb.key}`} className="crumb">
                {crumb.breadcrumb.props.children}
              </Link>
              <p>/</p>
            </div>
          ))}
          <div className="current-crumb">
            {breadcrumbs[breadcrumbs.length - 1].breadcrumb.props.children}
          </div>
        </div>
      )}
    </div>
  );
};

export default BreadCrumbs;
