import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import "./MobileNavPanel.css";
import Burger from "./NavComponents/Burger";
import CartIcon from "./NavComponents/CartIcon";
import MobileNavMenu from "./MobileNavMenu";
import useHideOnScrolled from "../../core/useHiddenOnScroll";

const MobileNavPanel = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [showBottomIcons, setShowBottomIcons] = useState(false);
  const showCartPreview = useSelector((state) => state.cartPreviewReducer);

  const { hiddenNav, hiddenBottomIcons } = useHideOnScrolled();

  useEffect(() => {
    if (showCartPreview) {
      setShowSideMenu(false);
    }
  }, [showCartPreview]);

  useEffect(() => {
    if (!showSideMenu) {
      setShowProductsMenu(false);
      setShowBottomIcons(false);
    }
    if (showSideMenu) {
      setShowBottomIcons(true);
    }
  }, [showSideMenu]);
  return (
    <div className="m-nav">
      <CSSTransition
        in={hiddenNav}
        timeout={1000}
        mountOnEnter
        unmountOnExit
        classNames="m-nav-animation"
      >
        <div className="m-nav-container">
          <div className="m-logo"></div>
          <div className="m-menu-control">
            <CartIcon />
            <Burger
              setShowSideMenu={setShowSideMenu}
              showSideMenu={showSideMenu}
            />
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={showSideMenu}
        timeout={1000}
        mountOnEnter
        unmountOnExit
        classNames="mnm"
      >
        <MobileNavMenu
          setShowSideMenu={setShowSideMenu}
          showSideMenu={showSideMenu}
          setShowProductsMenu={setShowProductsMenu}
          showProductsMenu={showProductsMenu}
        />
      </CSSTransition>
      <CSSTransition
        in={showBottomIcons}
        timeout={1000}
        mountOnEnter
        unmountOnExit
        classNames="mbi"
      >
        <div className="cart-burder-mobile-container">
          <CartIcon showSideMenu={showSideMenu} />
          <Burger
            setShowSideMenu={setShowSideMenu}
            showSideMenu={showSideMenu}
          />
        </div>
      </CSSTransition>
      <CSSTransition
        in={showSideMenu ? null : hiddenBottomIcons}
        timeout={1000}
        mountOnEnter
        unmountOnExit
        classNames="mbi"
      >
        <div className="cart-burder-mobile-container">
          <CartIcon showSideMenu={showSideMenu} />
          <Burger
            setShowSideMenu={setShowSideMenu}
            showSideMenu={showSideMenu}
          />
        </div>
      </CSSTransition>
    </div>
  );
};

export default MobileNavPanel;
