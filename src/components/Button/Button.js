import React from "react";
import "./Button.css";

const Button = ({ productIsInCart }) => {
  return (
    <div className="button-container">
      <button className="fancy">
        <span className="top-key"></span>
        {productIsInCart ? <p>In cart</p> : <p>Add to Cart</p>}

        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </button>
    </div>
  );
};

export default Button;
