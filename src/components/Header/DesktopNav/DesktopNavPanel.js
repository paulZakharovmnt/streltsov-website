import React, { useState } from "react";
import "./DesktopNavPanel.css";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import LanguageSelector from "../NavComponents/LanguageSelector";
import CartIcon from "../NavComponents/CartIcon";

const DesktopNavPanel = ({
  uniqueProductCategories,
  productsCategories,
  productsCategoriesIds,
}) => {
  const [showProductsMenu, setShowProductsMenu] = useState(false);

  // console.log(productsCategories);

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
            {uniqueProductCategories.map((category) => {
              return (
                <ul className="d-product-subcategory" key={category}>
                  <div className="d-subcategory-name">{category}</div>
                  {productsCategoriesIds
                    .filter(
                      (productId) =>
                        productsCategories[productId].category === category
                    )
                    .map((productType) => {
                      return (
                        <Link
                          to={`/streltsov-website/products/${productType}`}
                          className="d-sublink"
                          onClick={() => setShowProductsMenu(false)}
                          key={productType}
                        >
                          {productType}
                        </Link>
                      );
                    })}
                </ul>
              );
            })}
          </div>
          <div className="product-traingle"></div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DesktopNavPanel;
