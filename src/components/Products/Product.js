import React from "react";
import { useParams, Link } from "react-router-dom";

const Product = ({ listImg, product, productsById }) => {
  const productInfo = productsById[product];
  const { childLink } = useParams();
  console.log(productInfo);

  return (
    // <div className="productByType-list-product-container">
    <Link
      className="productByType-list-product-container"
      to={`/products/${childLink}/${product}`}
    >
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
    </Link>
  );
};

export default Product;