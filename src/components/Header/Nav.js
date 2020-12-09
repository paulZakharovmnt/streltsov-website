import React, { useState } from "react";
import MenuWithLinks from "./MenuWithLinks";
import classNames from "classnames";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <div className="logo"></div>
        </Link>

        <div className="cart">
          <Link to="/cart">
            <i className="cart-icon fas fa-shopping-cart" />
            <div className={itemsInCartCounterClasses}>
              <h4>3</h4>
            </div>
          </Link>
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
