import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from "react-router-dom";
import "./BreadCrumbs.css";
import BackBTN from "./BackBTN";

const BreadCrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  const homepageCrumb = breadcrumbs[1].key;
  const pathCrumbs = breadcrumbs.slice(2, breadcrumbs.length - 1);
  const currentCrumb =
    breadcrumbs[breadcrumbs.length - 1].breadcrumb.props.children;

  return (
    <div className="breadCrumbs-container">
      {breadcrumbs.length <= 2 ? null : (
        <div className="breadCrumbs">
          <BackBTN breadcrumbs={breadcrumbs} />
          <div className="crumbs-path">
            <Link to={`${homepageCrumb}`} className="home-crumb">
              Home
            </Link>
            <p> &nbsp;/</p>
            <div className="path">
              {pathCrumbs.map((crumb) => (
                <div key={crumb.key} className="crumb-box">
                  <Link to={`${crumb.key}`} className="crumb">
                    {crumb.breadcrumb.props.children}
                  </Link>
                  <p> /</p>
                </div>
              ))}
            </div>
            <div className="current-crumb">{currentCrumb}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BreadCrumbs;
