import React, { useState } from "react";
import { Link } from "react-router-dom";
import { childLinks } from "../../../core/NavigationLinks";

const ProductComponent = ({
  category,
  setShowProductsMenu,
  setShowSideMenu,
}) => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="product-menu-type-container">
      <div className="product-menu-type-header">
        <h4>{category}</h4>
        <div className="show-menu-btn" onClick={() => setShowLinks(!showLinks)}>
          show
        </div>
      </div>
      <div className="product-menu-type-list desktop">
        <ul>
          {childLinks[category].sublinks.map((childLink) => (
            <Link
              className="link-btn"
              to={`/products/${childLink}`}
              key={childLink}
              onClick={() => setShowProductsMenu(false)}
            >
              {childLink}
              {/* <li></li> */}
            </Link>
          ))}
        </ul>
      </div>
      {showLinks && (
        <div className="product-menu-type-list">
          <ul>
            {childLinks[category].sublinks.map((childLink) => (
              <Link
                to={`/products/${childLink}`}
                key={childLink}
                className="link-btn"
                onClick={() => setShowSideMenu(false)}
              >
                {childLink}
                {/* <li></li> */}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductComponent;
