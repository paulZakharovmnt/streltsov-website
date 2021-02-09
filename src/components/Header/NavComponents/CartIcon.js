import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleShowCartPreview } from "../../../redux/actions/actions";
import icon from "../../../img/icons/cart.png";
import "./CartIcon.css";
import classNames from "classnames";

const CartIcon = ({ showSideMenu }) => {
  const dispatch = useDispatch();
  const showCartPreview = useSelector((state) => state.cartPreviewReducer);
  const productsAllIdsInCart = useSelector(
    (state) => state.productsAllIdsInCartReducer
  );

  const cartIconClasses = classNames("cart-icon-container", {
    openedSideMenuCart: showSideMenu,
  });

  return (
    <div className={cartIconClasses}>
      <div
        className="icon-container"
        onClick={() => dispatch(handleShowCartPreview(!showCartPreview))}
      >
        <img src={icon} alt="" className="cart-icon" />
        <div className="cart-counter">{productsAllIdsInCart.length}</div>
      </div>
    </div>
  );
};

export default CartIcon;
