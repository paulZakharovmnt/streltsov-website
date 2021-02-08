import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import LinkList from "./NavComponents/LinkList";
import LanguageSelector from "./NavComponents/LanguageSelector";
import CartIcon from "./NavComponents/CartIcon";
// import Burger from "./NavComponents/Burger";
import ProductMenu from "./ProductMenu";

const DesktopNavPanel = () => {
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  return (
    <div className="nav-box">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to={`/`} className="logo"></Link>
        </div>
        <div className="nav-controls">
          <div className="nav-link-list-desktop">
            <LinkList
              showProductsMenu={showProductsMenu}
              setShowProductsMenu={setShowProductsMenu}
            />
          </div>
          <div className="nav-language-desktop">
            <LanguageSelector />
          </div>
          <div className="nav-cart-burder-desktop">
            <CartIcon />
            {/* <Burger
              setShowSideMenu={setShowSideMenu}
              showSideMenu={showSideMenu}
            /> */}
          </div>
          <CSSTransition
            in={showProductsMenu}
            timeout={1000}
            mountOnEnter
            unmountOnExit
            classNames="pmd"
          >
            <div className="products-menu-desktop">
              <ProductMenu setShowProductsMenu={setShowProductsMenu} />
            </div>
          </CSSTransition>
        </div>
        <div className="nav-traingle"></div>
      </div>
    </div>
  );
};

export default DesktopNavPanel;
