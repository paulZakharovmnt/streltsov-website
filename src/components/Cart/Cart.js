import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";

import ProductInCart from "./ProductInCart";

const Cart = () => {
  const productsInCart = useSelector((state) => state.cartReducer);
  const productsAllIdsInCart = useSelector(
    (state) => state.productsAllIdsInCartReducer
  );

  return (
    <div className="cart-page">
      <div className="cart-header"> Your cart: </div>
      <div className="cart-container">
        <div className="cart-list-of-products">
          {productsAllIdsInCart.length === 0 ? (
            <div>YOUR CART IS EMPTY</div>
          ) : (
            productsAllIdsInCart.map((product) => (
              <ProductInCart
                key={product}
                product={product}
                productsInCart={productsInCart}
              />
            ))
          )}
        </div>
        <div className="cart-subtotal-container">
          <h3>Subtotal</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
