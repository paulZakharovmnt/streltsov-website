import React from "react";
import { useParams, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Product = ({ product, productsById }) => {
  const productInfo = productsById[product];
  const { childLink } = useParams();

  return (
    <Link
      className="productByType-list-product-container"
      to={`/streltsov-website/products/${childLink}/${product}`}
    >
      <Fade delay={300} bottom distance={"100px"}>
        <div className="productByType-photo">
          <img src={productInfo.images[0]} alt="" />
        </div>
        <div className="productByType-name-price-box">
          <div className="productByType-name-container">
            <h4>{productInfo.name}</h4>
            <p className="test">{productInfo.collection}</p>
          </div>
          <div className="productByType-price">{productInfo.price} USD</div>
        </div>
      </Fade>
    </Link>
  );
};

export default Product;
