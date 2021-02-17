import React from "react";
import "./PopupMessage.css";

const PopupMessage = ({ currentProduct }) => {
  return (
    <div className="pop-up-message-container">
      <div className="popup-message">
        <p>The product </p>
        <h5 className="product-name-popup">{currentProduct.name}</h5>
        <p> has been added to the cart</p>
      </div>

      <div className="popup-triangle"></div>
    </div>
  );
};

export default PopupMessage;
