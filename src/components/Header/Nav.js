import React, { useState } from "react";
import MenuWithLinks from "./MenuWithLinks";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Nav.css";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const productsAllIdsInCart = useSelector(
    (state) => state.productsAllIdsInCartReducer
  );
  // const itemsInCartLength = useSelector((state) => state.cartReducer.length);

  const burgerBtnClasses = classNames("burger-container", {
    active: showMenu,
    close: !showMenu,
  });

  const itemsInCartCounterClasses = classNames("items-number-in-cart", {
    cartIsNotEmpty: productsAllIdsInCart.length > 0,
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
              <h4>{productsAllIdsInCart.length}</h4>
            </div>
          </Link>
        </div>
      </div>
      {showMenu && (
        <div className="nav-dynamic-part">
          <MenuWithLinks setShowMenu={setShowMenu} />
        </div>
      )}
    </div>
  );
};

export default Nav;
