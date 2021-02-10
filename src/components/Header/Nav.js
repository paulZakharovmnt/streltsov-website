import React from "react";
import "./Nav.css";
import DesktopNavPanel from "./DesktopNav/DesktopNavPanel";
import MobileNavPanel from "./MobileNav/MobileNavPanel";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-desktop">
        <DesktopNavPanel />
      </div>
      <div className="nav-mobile">
        <MobileNavPanel />
      </div>
    </div>
  );
};

export default Nav;
