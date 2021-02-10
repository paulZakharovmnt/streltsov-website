import React, { useEffect, useState } from "react";
import LanguageSelector from "../NavComponents/LanguageSelector";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./SideMenu.css";

const SideMenu = ({ setShowSideMenu }) => {
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const productButtonClasses = classNames("main-link-btn", {
    mProductMenuSelected: showProductsMenu,
  });
  const ulClasses = classNames("ul-list", {
    openedUl: showProductsMenu,
    closedUl: !showProductsMenu,
  });

  // ALL this code will be re-orginized: splited into different re-usable components

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
                  <li className="m-products-types">
                    <div className="m-types-head">
                      <p>Pens</p>
                    </div>
                    <div className="m-sublinks">
                      <Link
                        onClick={() => setShowSideMenu(false)}
                        to={`/products/Pen`}
                        className="m-link"
                      >
                        Pen
                      </Link>
                      <Link
                        onClick={() => setShowSideMenu(false)}
                        to={`/products/Pencil`}
                        className="m-link"
                      >
                        Pencil
                      </Link>
                    </div>
                  </li>
                  <li className="m-products-types">
                    <div className="m-types-head">
                      <p>Jewelry</p>
                    </div>

                    <div className="m-sublinks">
                      <Link
                        onClick={() => setShowSideMenu(false)}
                        to={`/products/Pendants`}
                        className="m-link"
                      >
                        Pendants
                      </Link>
                      <Link
                        onClick={() => setShowSideMenu(false)}
                        to={`/products/Bracelets`}
                        className="m-link"
                      >
                        Bracelets
                      </Link>
                    </div>
                  </li>
                  <li className="m-products-types">
                    <div className="m-types-head">
                      <p>Accessory</p>
                    </div>

                    <div className="m-sublinks">
                      <Link
                        onClick={() => setShowSideMenu(false)}
                        to={`/products/Keychain`}
                        className="m-link"
                      >
                        Keychain
                      </Link>
                      <Link
                        onClick={() => setShowSideMenu(false)}
                        to={`/products/Beads`}
                        className="m-link"
                      >
                        Beads
                      </Link>
                    </div>
                  </li>
                </ul>
              </CSSTransition>
            </div>
          </li>
          <li>
            <div className="main-link-btn">
              <Link
                onClick={() => setShowSideMenu(false)}
                to={`/products/Gallery`}
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
                to={`/products/About`}
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
                // onClick={() => setShowSideMenu(false)}
                to={`/products/Contact`}
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
