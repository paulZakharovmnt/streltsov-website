import React from "react";
import { Link } from "react-router-dom";
import headerImage from "../../img/headers/products1.jpg";
import Fade from "react-reveal/Fade";
import "./Products.css";

import { useSelector } from "react-redux";

const Products = () => {
  const productCategoriesAllIds = useSelector(
    (state) => state.settingsReducer.settingsById.productType.allIds
  );
  const productCategoriesById = useSelector(
    (state) => state.settingsReducer.settingsById.productType.byId
  );
  return (
    <div className="products-page">
      <div className="products-header">
        <div className="products-title">
          <h1>Products</h1>
          <p>Some interesting text</p>
        </div>
        <div className="products-header-image">
          <img src={headerImage} alt="" />
        </div>
      </div>
      <div className="products-list">
        {productCategoriesAllIds.map((category) => {
          return (
            <Link
              to={`/streltsov-website/products/${category}`}
              className="product-container"
              key={category}
            >
              <Fade bottom distance={"100px"} delay={300}>
                <div className="product-img-box">
                  <img src={productCategoriesById[category].image} alt="" />
                </div>
              </Fade>
              <Fade bottom distance={"100px"} delay={300}>
                <div className="product-title">
                  <h4>{productCategoriesById[category].name}</h4>
                </div>
              </Fade>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
