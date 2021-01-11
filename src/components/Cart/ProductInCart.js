import React from "react";
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

  return (
    <div className="cart-product-container">
      <div className="cart-product-image">
        <img />
      </div>
      <div className="product-name-price">
        <h2>{product}</h2>
        <p>{productInfo.description}</p>
        <p>$ {productInfo.price}</p>
      </div>
      <div className="product-quont-remove">
        <div className="cart-quontity-container">
          <div className="minus-cont">
            {productInfo.quontity > 1 && (
              <i
                className="quont-control fas fa-minus"
                onClick={() => dispatch(decrementProductQuontity(product))}
              />
            )}
          </div>
          <div className="quont-cont">{productInfo.quontity}</div>

          <div className="plus-cont">
            <i
              className="quont-control fas fa-plus"
              onClick={() => dispatch(incrementProductQuontity(product))}
            />
          </div>
        </div>
        <div
          className="remove-btn"
          onClick={() => dispatch(deleteProductFromCart(product))}
        >
          Remove
        </div>
      </div>
      <div className="product-final-price">
        <h4>$ {productInfo.price * productInfo.quontity}</h4>
      </div>
    </div>
  );
};

export default ProductInCart;
