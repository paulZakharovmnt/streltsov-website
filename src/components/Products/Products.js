import React from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import { childLinks, linksWithOptions } from "../../core/NavigationLinks";
import headerImage from "../../img/headers/products1.jpg";
import Fade from "react-reveal/Fade";
import "./Products.css";

const Products = () => {
  // const productsById = useSelector((state) => state.productsByIdReducer);
  // const productsAllIds = useSelector((state) => state.productsAllIdsReducer);

  // const test = linksWithOptions.map((parentLink) =>
  //   childLinks[parentLink].sublinks.map((sublink) =>
  //     console.log(childLinks[parentLink].linksData[sublink].name)
  //   )
  // );
  return (
    <div className="products-page">
      <Fade>
        <div className="products-header">
          <div className="products-title">
            <h1>Products</h1>
            <p>Some interesting text</p>
          </div>
          <div className="products-header-image">
            <img src={headerImage} alt="" />
          </div>
        </div>
      </Fade>
      <div className="products-list">
        {linksWithOptions.map((parentLink) =>
          childLinks[parentLink].sublinks.map((sublink) => {
            return (
              <Fade bottom distance={"100px"} delay={300}>
                <Link
                  to={`/streltsov-website/products/${childLinks[parentLink].linksData[sublink].name}`}
                  className="product-container"
                  key={sublink}
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
              </Fade>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Products;
