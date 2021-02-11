import React, { useEffect, useState } from "react";
import "./CartPreview.css";
import { useSelector, useDispatch } from "react-redux";
import { handleShowCartPreview } from "../../redux/actions/actions";
// import { CSSTransition } from "react-transition-group";
import countProductsSubtotal from "../../core/countProductsSubtotal";
import classNames from "classnames";
import ProductInCart from "./ProductInCart";
import LoadingSpinner from "../AdditionalComponents/LoadingSpinner";

const CartPreview = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const showCartPreview = useSelector((state) => state.cartPreviewReducer);
  const productsInCart = useSelector((state) => state.cartReducer);
  const productsAllIdsInCart = useSelector(
    (state) => state.productsAllIdsInCartReducer
  );
  const subtotal = countProductsSubtotal(productsInCart, productsAllIdsInCart);
  const delivery = 50;

  // console.log(subtotal);

  useEffect(() => {
    if (productsInCart === null) {
      return;
    }
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
    return () => {
      setShowSpinner(false);
    };
  }, [productsInCart]);

  const dispatch = useDispatch();

  const cartPreviewClasses = classNames("cart-preview-container", {
    openedCart: showCartPreview,
  });

  return (
    <div className="cart-preview-modal">
      <div
        className="black-wall"
        onClick={() => dispatch(handleShowCartPreview(false))}
      ></div>

      <div className={cartPreviewClasses}>
        <div className="cart-box">
          <div className="cart-header">
            <h2>CART</h2>
            <div
              className="close-cart-btn"
              onClick={() => dispatch(handleShowCartPreview(false))}
            >
              Close
            </div>
          </div>
          {productsAllIdsInCart.length > 0 ? (
            <div className="cart-preview">
              <div className="cart-preview-products-list">
                {productsAllIdsInCart.map((product) => (
                  <ProductInCart
                    key={product}
                    product={product}
                    productsInCart={productsInCart}
                  />
                ))}
              </div>
              <div className="cart-preview-total-container">
                <div className="cart-preview-subtotal">
                  <h4>Subtotal</h4>
                  <p>{subtotal} USD</p>
                </div>
                <div className="cart-preview-subtotal">
                  <h4>Delivery</h4>
                  <p>{delivery} USD</p>
                </div>
                <span></span>
                <div className="cart-preview-total">
                  <h4>Total</h4>
                  <p>{subtotal + delivery} USD</p>
                </div>
              </div>
              <div className="cart-preview-buttons-container">
                <div className="proceed-btn">
                  <p>Proceed to checkout</p>
                  <div className="checkout-traingle"></div>
                </div>
                <div
                  className="cont-shopping-btn"
                  onClick={() => dispatch(handleShowCartPreview(false))}
                >
                  <p>Continue shopping</p>
                  <div className="continue-traingle"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="cart-empty"> Your cart is empty</div>
          )}
        </div>
        {showSpinner && <LoadingSpinner />}
      </div>
    </div>
  );
};

export default CartPreview;
