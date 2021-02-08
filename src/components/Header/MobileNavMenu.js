import React from "react";
import "./MobileNavMenu.css";
import LanguageSelector from "./NavComponents/LanguageSelector";
import LinkList from "./NavComponents/LinkList";

const MobileNavMenu = ({
  setShowSideMenu,
  setShowProductsMenu,
  showProductsMenu,
}) => {
  return (
    <div className="mobile-menu">
      <div className="mm-left-side">
        <div className="mm-list-links">
          <LinkList
            setShowProductsMenu={setShowProductsMenu}
            showProductsMenu={showProductsMenu}
            setShowSideMenu={setShowSideMenu}
          />
        </div>
        <div className="mm-langauge-box">
          <LanguageSelector />
        </div>
      </div>
      <div className="mm-right-side">
        {/* <div className="cart-burder-mobile-container">
          <CartIcon showSideMenu={showSideMenu} />
          <Burger
            setShowSideMenu={setShowSideMenu}
            showSideMenu={showSideMenu}
          />
        </div> */}
      </div>
    </div>
  );
};

export default MobileNavMenu;
