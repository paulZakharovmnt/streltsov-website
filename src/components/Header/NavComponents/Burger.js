import React from "react";
import "./Burger.css";
import classNames from "classnames";

const Burger = ({ setShowSideMenu, showSideMenu }) => {
  const burgerClasses = classNames("burger", {
    active: showSideMenu,
  });
  return (
    <div
      className="burger-container"
      onClick={() => setShowSideMenu(!showSideMenu)}
    >
      <div className={burgerClasses}>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"> </span>
      </div>
    </div>
  );
};

export default Burger;
