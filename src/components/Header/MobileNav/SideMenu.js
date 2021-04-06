import React, { useState } from "react";
import LanguageSelector from "../NavComponents/LanguageSelector";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./SideMenu.css";

const SideMenu = ({
  setShowSideMenu,
  uniqueProductCategories,
  productsCategories,
  productsCategoriesIds,
}) => {
  const [showProductsMenu, setShowProductsMenu] = useState(false);

  const productButtonClasses = classNames("main-link-btn", {
    mProductMenuSelected: showProductsMenu,
  });
  const ulClasses = classNames("ul-list", {
    openedUl: showProductsMenu,
    closedUl: !showProductsMenu,
  });

  return (
    <div className="sidemenu">
      <div className="links-block">
        <ul className="m-links-list">
          <li>
            <div
              className={productButtonClasses}
              onClick={() => setShowProductsMenu(!showProductsMenu)}
            >
              <p>Products</p>
              <div className="m-small-traingle"></div>
            </div>

            <div className="m-products">
              <CSSTransition
                in={showProductsMenu}
                timeout={{ enter: 1000, exit: 700 }}
                mountOnEnter
                unmountOnExit
                classNames="m-pr"
              >
                <ul className={ulClasses}>
                  {uniqueProductCategories.map((category) => {
                    return (
                      <li className="m-products-types" key={category}>
                        <div className="m-types-head">
                          <p>{category}</p>
                        </div>
                        <div className="m-sublinks">
                          {productsCategoriesIds
                            .filter(
                              (productId) =>
                                productsCategories[productId].category ===
                                category
                            )
                            .map((productType) => {
                              return (
                                <Link
                                  onClick={() => setShowSideMenu(false)}
                                  to={`/streltsov-website/products/${productType}`}
                                  className="m-link"
                                  key={productType}
                                >
                                  {productType}
                                </Link>
                              );
                            })}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </CSSTransition>
            </div>
          </li>
          <li>
            <div className="main-link-btn">
              <Link
                onClick={() => setShowSideMenu(false)}
                to={`/streltsov-website/Gallery`}
                className="m-parent-link"
              >
                Gallery
              </Link>
              <div className="m-small-traingle"></div>
            </div>
          </li>
          <li>
            <div className="main-link-btn">
              <Link
                onClick={() => setShowSideMenu(false)}
                to={`/streltsov-website/About`}
                className="m-parent-link"
              >
                About
              </Link>
              <div className="m-small-traingle"></div>
            </div>
          </li>
          <li>
            <div className="main-link-btn">
              {" "}
              <Link
                onClick={() => setShowSideMenu(false)}
                to={`/streltsov-website/Contact`}
                className="m-parent-link"
              >
                Contact
              </Link>
              <div className="m-small-traingle"></div>
            </div>
          </li>
        </ul>
      </div>
      <div className="language-block">
        <LanguageSelector />
      </div>
    </div>
  );
};

export default SideMenu;
