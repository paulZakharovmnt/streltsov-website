import React, { useState } from "react";
import "./DesktopNavPanel.css";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import LanguageSelector from "../NavComponents/LanguageSelector";
import CartIcon from "../NavComponents/CartIcon";

const DesktopNavPanel = () => {
  const [showProductsMenu, setShowProductsMenu] = useState(false);

  const productButtonClasses = classNames("d-link", {
    productMenuSelected: showProductsMenu,
  });

  return (
    <div className="d-nav">
      <div className="d-nav-logo">
        <Link to={`/`} className="logo"></Link>
      </div>
      <div className="d-nav-control">
        <ul className="d-links-list">
          <li
            className={productButtonClasses}
            onClick={() => setShowProductsMenu(!showProductsMenu)}
          >
            <p>Products</p>
            <div className="small-traingle"></div>
          </li>
          <li className="d-link">
            <Link to={`/gallery`} className="d-link-to">
              Gallery
            </Link>

            <div className="small-traingle"></div>
          </li>
          <li className="d-link">
            <Link to={`/about`} className="d-link-to">
              About
            </Link>
            <div className="small-traingle"></div>
          </li>
          <li className="d-link">
            <Link to={`/contact`} className="d-link-to">
              Contact
            </Link>
            <div className="small-traingle"></div>
          </li>
        </ul>
        <div className="d-language">
          <LanguageSelector />
        </div>
        <div className="d-cart">
          <CartIcon />
        </div>
      </div>
      <div className="nav-traingle"></div>
      <CSSTransition
        in={showProductsMenu}
        timeout={500}
        mountOnEnter
        unmountOnExit
        classNames="pmd"
      >
        <div className="d-product-menu">
          <div className="d-product-container">
            <ul className="d-product-subcategory">
              <div className="d-subcategory-name">Pens</div>
              <Link to={`/products/Pen`} className="d-sublink">
                Pen
              </Link>
              <Link to={`/products/Pencil`} className="d-sublink">
                Pencil
              </Link>
            </ul>
            <ul className="d-product-subcategory">
              <div className="d-subcategory-name">Jewelry</div>
              <Link to={`/products/Pendants`} className="d-sublink">
                Pendants
              </Link>
              <Link to={`/products/Bracelets`} className="d-sublink">
                Bracelets
              </Link>
            </ul>
            <ul className="d-product-subcategory">
              <div className="d-subcategory-name">Accessory</div>
              <Link to={`/products/Keychains`} className="d-sublink">
                Keychains
              </Link>
              <Link to={`/products/Beadsch`} className="d-sublink">
                Beads
              </Link>
            </ul>
          </div>
          <div className="product-traingle"></div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DesktopNavPanel;
