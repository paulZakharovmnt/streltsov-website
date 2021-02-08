import React from "react";
import "./ProductMenu.css";
import { linksWithOptions } from "../../core/NavigationLinks";
import ProductComponent from "./NavComponents/ProductComponent";

const ProductMenu = ({ setShowProductsMenu, setShowSideMenu }) => {
  return (
    <div className="products-menu-container">
      <div className="products">
        <div className="products-menu">
          {linksWithOptions.map((category) => (
            <ProductComponent
              key={category}
              category={category}
              setShowProductsMenu={setShowProductsMenu}
              setShowSideMenu={setShowSideMenu}
            />
          ))}
        </div>
      </div>
      <div className="product-traingle"></div>
    </div>
  );
};

export default ProductMenu;
