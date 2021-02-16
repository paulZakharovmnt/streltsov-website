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
        <Link to={`/streltsov-website/`} className="logo"></Link>
      </div>
      <div className="d-nav-control">
        <ul className="d-links-list">
          <Link
            to={`/streltsov-website/products`}
            className={productButtonClasses}
            onMouseEnter={() => setShowProductsMenu(true)}
            onMouseLeave={() => setShowProductsMenu(false)}
            onClick={() => setShowProductsMenu(false)}
          >
            <p>Products</p>
            <div className="small-traingle"></div>
          </Link>
          <li className="d-link">
            <Link to={`/streltsov-website/gallery`} className="d-link-to">
              Gallery
            </Link>

            <div className="small-traingle"></div>
          </li>
          <li className="d-link">
            <Link to={`/streltsov-website/about`} className="d-link-to">
              About
            </Link>
            <div className="small-traingle"></div>
          </li>
          <li className="d-link">
            <Link to={`/streltsov-website/contact`} className="d-link-to">
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
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames="pmd"
      >
        <div
          className="d-product-menu"
          onMouseEnter={() => setShowProductsMenu(true)}
          onMouseLeave={() => setShowProductsMenu(false)}
        >
          <div className="d-product-container">
            <ul className="d-product-subcategory">
              <div className="d-subcategory-name">Pens</div>
              <Link
                to={`/streltsov-website/products/Pen`}
                className="d-sublink"
                onClick={() => setShowProductsMenu(false)}
              >
                Pen
              </Link>
              <Link
                to={`/streltsov-website/products/Pencil`}
                className="d-sublink"
                onClick={() => setShowProductsMenu(false)}
              >
                Pencil
              </Link>
            </ul>
            <ul className="d-product-subcategory">
              <div className="d-subcategory-name">Jewelry</div>
              <Link
                to={`/streltsov-website/products/Pendants`}
                className="d-sublink"
                onClick={() => setShowProductsMenu(false)}
              >
                Pendants
              </Link>
              <Link
                to={`/streltsov-website/products/Bracelets`}
                className="d-sublink"
                onClick={() => setShowProductsMenu(false)}
              >
                Bracelets
              </Link>
            </ul>
            <ul className="d-product-subcategory">
              <div className="d-subcategory-name">Accessory</div>
              <Link
                to={`/streltsov-website/products/Keychains`}
                className="d-sublink"
                onClick={() => setShowProductsMenu(false)}
              >
                Keychains
              </Link>
              <Link
                to={`/streltsov-website/products/Beadsch`}
                className="d-sublink"
                onClick={() => setShowProductsMenu(false)}
              >
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
