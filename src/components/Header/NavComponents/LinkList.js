import React from "react";
import ProductMenu from "../ProductMenu";
import { CSSTransition } from "react-transition-group";
import "./LinkList.css";

const LinkList = ({
  setShowProductsMenu,
  showProductsMenu,
  setShowSideMenu,
}) => {
  return (
    <ul className="links-list">
      <li className="li-products-container">
        <div className="li-btn">
          <p onClick={() => setShowProductsMenu(!showProductsMenu)}>Products</p>
          <div className="small-traingle"></div>
        </div>
        <CSSTransition
          in={showProductsMenu}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          classNames="prod-mm-animation"
        >
          <div className="products-menu-mobile">
            <ProductMenu setShowSideMenu={setShowSideMenu} />
          </div>
        </CSSTransition>
        {/* {showProductsMenu && (
          <div className="products-menu-mobile">
            <ProductMenu setShowSideMenu={setShowSideMenu} />
          </div>
        )} */}
      </li>
      <li>
        <p>Gallery</p>
        <div className="small-traingle"></div>
      </li>
      <li>
        <p>About Us</p>
        <div className="small-traingle"></div>
      </li>
      <li>
        <p>Contact</p>
        <div className="small-traingle"></div>
      </li>
    </ul>
  );
};

export default LinkList;
