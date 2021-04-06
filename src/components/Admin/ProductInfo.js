import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/actions/actions";
import "./ProductInfo.css";

const ProductInfo = ({ product, productsById, handleOpenEditModalClick }) => {
  const [userWantsDeleteProduct, setUserWantsDeleteProduct] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="controled-product">
      <img src={productsById[product].images[0]} alt="" />
      <h3>{productsById[product].name}</h3>
      <button onClick={() => handleOpenEditModalClick(productsById[product])}>
        edit
      </button>
      {!userWantsDeleteProduct ? (
        <button onClick={() => setUserWantsDeleteProduct(true)}>delete</button>
      ) : (
        <div>
          <p>Do you really want to delete?</p>
          <button onClick={() => dispatch(deleteProduct(product))}>Yes</button>
          <button onClick={() => setUserWantsDeleteProduct(false)}>No</button>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
