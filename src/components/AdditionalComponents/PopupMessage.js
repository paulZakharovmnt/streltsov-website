import React from "react";
import "./PopupMessage.css";

const PopupMessage = ({ currentProduct }) => {
  return (
    <div className="pop-up-message-container">
      <p>The product </p>
      <h5 className="product-name-popup">{currentProduct.name}</h5>{" "}
      <p> has been added to the cart</p>
    </div>
  );
};

export default PopupMessage;
