import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  deleteProductFromCart,
  incrementProductQuontity,
  decrementProductQuontity,
} from "../../redux/actions/actions";
import "./ProductInCart.css";

const ProductInCart = ({ product, productsInCart }) => {
  const dispatch = useDispatch();
  const productInfo = productsInCart[product];
  useEffect(() => {
    if (productInfo.quontity === 0) {
      dispatch(deleteProductFromCart(product));
    }
  }, [productInfo]);

  return (
    <div className="cart-preview-product-container">
      <div className="cart-preview-product-photo">
        <img src={productInfo.image} alt="" />
      </div>
      <div className="cart-preview-product-info">
        <h4>{productInfo.name}</h4>
        <div className="cart-preview-product-counter">
          <div className="cart-preview-counter">
            <p onClick={() => dispatch(decrementProductQuontity(product))}>-</p>
            <h5>{productInfo.quontity}</h5>
            <p onClick={() => dispatch(incrementProductQuontity(product))}>+</p>
          </div>
          <p>{productInfo.price} USD</p>
        </div>
        <div className="cart-preview-product-counter-price">
          {" "}
          {productInfo.price * productInfo.quontity} USD
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
