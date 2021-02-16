import React, { useEffect, useState } from "react";
import BillingDetails from "./BillingDetails";
import countProductsSubtotal from "../../core/countProductsSubtotal";
import { useSelector } from "react-redux";
import "./CartPage.css";
import LoadingSpinner from "../AdditionalComponents/LoadingSpinner";

const CartPage = () => {
  const [expressShipping, setExpressShipping] = useState(false);
  const [deliveryCost, setDeliveryCost] = useState(0);
  const productsInCart = useSelector((state) => state.cartReducer);
  const productsAllIdsInCart = useSelector(
    (state) => state.productsAllIdsInCartReducer
  );
  const subtotal = countProductsSubtotal(productsInCart, productsAllIdsInCart);

  console.log(subtotal);

  useEffect(() => {
    if (expressShipping) {
      setDeliveryCost(79);
      return;
    }
    setDeliveryCost(0);
  }, [expressShipping]);
  return (
    <div className="cart-page">
      <BillingDetails />
      <div className="cart-right">
        {productsAllIdsInCart.map((product) => {
          return (
            <div className="cart-product">
              <img src={productsInCart[product].image} alt="" />
              <h2>{productsInCart[product].name}</h2>
              <p>x{productsInCart[product].quontity}</p>
              <h3>
                USD &nbsp;
                {productsInCart[product].quontity *
                  productsInCart[product].price}
              </h3>
            </div>
          );
        })}
        <div className="cart-subtotal-container">
          <div className="cart-subtotal">
            <p>Subtotal</p>
            <p>USD &nbsp;{subtotal}</p>
          </div>
          <div className="cart-delivery">
            <p>Delivery</p>
            <div className="delivery-option">
              <p
                className={expressShipping ? "shipping" : "shipping selected"}
                onClick={() => setExpressShipping(false)}
              >
                Standart
              </p>
              |
              <p
                className={expressShipping ? "shipping selected" : "shipping"}
                onClick={() => setExpressShipping(true)}
              >
                Express (DHL)
              </p>
            </div>
            <p>USD &nbsp; {deliveryCost}</p>
          </div>
        </div>
        <div className="cart-total">
          <p>Total</p>
          {/* <p>USD &nbsp;{subtotal + deliveryCost}</p> */}
          <p>USD &nbsp;2 000.-</p>
        </div>
        <div className="checkout-btn">
          <p>Proceed Checkout</p>
          <div className="checkout-btn-traingle"></div>
        </div>
        {/* <LoadingSpinner /> */}
      </div>
    </div>
  );
};

export default CartPage;
