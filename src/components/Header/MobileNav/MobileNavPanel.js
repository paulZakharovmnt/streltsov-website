import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./MobileNavPanel.css";
import Burger from "../NavComponents/Burger";
import CartIcon from "../NavComponents/CartIcon";
import useHideOnScrolled from "../../../core/useHiddenOnScroll";
import SideMenu from "./SideMenu";

const MobileNavPanel = ({
  uniqueProductCategories,
  productsCategories,
  productsCategoriesIds,
}) => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const showCartPreview = useSelector((state) => state.cartPreviewReducer);

  const { hiddenNav, hiddenBottomIcons } = useHideOnScrolled();

  useEffect(() => {
    if (showCartPreview) {
      setShowSideMenu(false);
    }
  }, [showCartPreview]);

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
          <Link to={`/streltsov-website/`} className="m-logo"></Link>
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
        <SideMenu
          setShowSideMenu={setShowSideMenu}
          uniqueProductCategories={uniqueProductCategories}
          productsCategories={productsCategories}
          productsCategoriesIds={productsCategoriesIds}
        />
      </CSSTransition>
      <CSSTransition
        in={showSideMenu || hiddenBottomIcons}
        timeout={1000}
        mountOnEnter
        unmountOnExit
        classNames="mbi"
      >
        <div className="bottom-icons">
          <CartIcon />
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
