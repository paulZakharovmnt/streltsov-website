import React from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { childLinks, linksWithOptions } from "../../core/NavigationLinks";
import headerImage from "../../img/headers/products1.jpg";
import "./Products.css";

const Products = () => {
  const productsById = useSelector((state) => state.productsByIdReducer);
  const productsAllIds = useSelector((state) => state.productsAllIdsReducer);

  const test = linksWithOptions.map((parentLink) =>
    childLinks[parentLink].sublinks.map((sublink) =>
      console.log(childLinks[parentLink].linksData[sublink].name)
    )
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
        {linksWithOptions.map((parentLink) =>
          childLinks[parentLink].sublinks.map((sublink) => {
            return (
              <Link
                to={`/streltsov-website/products/${childLinks[parentLink].linksData[sublink].name}`}
                className="product-container"
              >
                <div className="product-img-box">
                  <img
                    src={childLinks[parentLink].linksData[sublink].image}
                    alt=""
                  />
                </div>

                <div className="product-title">
                  <h4>{childLinks[parentLink].linksData[sublink].name}</h4>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Products;
