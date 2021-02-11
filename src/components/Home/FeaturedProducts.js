import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FeaturedProducts.css";
import { CSSTransition } from "react-transition-group";
import LeftArrow from "../AdditionalComponents/ImageNavArrows/LeftArrow";
import RightArrow from "../AdditionalComponents/ImageNavArrows/RightArrow";
import { useSelector } from "react-redux";

const FeaturedProducts = () => {
  const [showingProductId, setShowingProductId] = useState(0);
  const productsAllIds = useSelector((state) => state.productsAllIdsReducer);
  const productsById = useSelector((state) => state.productsByIdReducer);

  const onlyFeaturedProducts = productsAllIds.filter(
    (product) => productsById[product].featured === true
  );

  let currentProduct = {};

  if (onlyFeaturedProducts.length > 0) {
    currentProduct = productsById[onlyFeaturedProducts[showingProductId]];
  }

  const nextFeaturedProduct = () => {
    if (showingProductId === onlyFeaturedProducts.length - 1) {
      setShowingProductId(0);
      return;
    }
    setShowingProductId(showingProductId + 1);
  };

  const prevFeaturedProduct = () => {
    if (showingProductId === 0) {
      setShowingProductId(onlyFeaturedProducts.length - 1);
      return;
    }
    setShowingProductId(showingProductId - 1);
  };

  return (
    <div className="featured">
      {onlyFeaturedProducts.length > 0 && (
        <div className="featured-container">
          <div className="featured-product">
            <div className="featured-product-info">
              <p>{currentProduct.collection}</p>
              <h1>{currentProduct.name}</h1>
              <p>{currentProduct.description}</p>
            </div>
            <div className="featured-product-view-btn">
              {/* <p> */}
              <Link
                className="product-view-btn"
                to={`/streltsov-website/products/${currentProduct.type}/${currentProduct.name}`}
              >
                View product
              </Link>
              {/* </p> */}

              <div className="featured-product-view-btn-traingle"></div>
            </div>
          </div>
          <div className="featured-images-container">
            <div className="featured-image1-dots">
              <div className="featured-dots">
                {onlyFeaturedProducts.map((product, id) => (
                  <span
                    key={product}
                    className={
                      showingProductId === id
                        ? "featured-dot selectedDot"
                        : "featured-dot"
                    }
                  ></span>
                ))}
              </div>
              <div className="featured-image1-wrap">
                <CSSTransition
                  key={currentProduct}
                  in={currentProduct}
                  addEndListener={(node, done) =>
                    node.addEventListener("transitionend", done, false)
                  }
                  timeout={1000}
                  mountOnEnter
                  unmountOnExit
                  classNames="fi1"
                >
                  <img src={currentProduct.images[0]} alt="" />
                </CSSTransition>
              </div>
            </div>
            <div className="featured-image2-control">
              <div className="featured-image2-wrap">
                <img src={currentProduct.images[1]} alt="" />
              </div>
              <div className="featured-control">
                <LeftArrow showPrevImage={prevFeaturedProduct} />
                <RightArrow showNextImage={nextFeaturedProduct} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* )} */}
    </div>
  );
};

export default FeaturedProducts;
