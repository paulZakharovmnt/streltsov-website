import React, { useState } from "react";
import MenuWithLinks from "./MenuWithLinks";
import classNames from "classnames";
import "./Nav.css";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [itemsincart, setitemsincart] = useState(1);
  const burgerBtnClasses = classNames("burger-container", {
    active: showMenu,
    close: !showMenu,
  });

  const itemsInCartCounterClasses = classNames("items-number-in-cart", {
    cartIsNotEmpty: itemsincart > 0,
  });

  return (
    <div className="nav">
      <div className="nav-fix-part">
        <div
          className={burgerBtnClasses}
          onClick={() => setShowMenu(!showMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="logo"></div>

        <div className="cart">
          <i className="cart-icon fas fa-shopping-cart" />
          <div className={itemsInCartCounterClasses}>
            <h4>3</h4>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="nav-dynamic-part">
          <MenuWithLinks />
        </div>
      )}
    </div>
  );
};

export default Nav;
