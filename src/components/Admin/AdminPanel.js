import React from "react";
import { productsByIdTEST, productsAllIds } from "../../core/TestProducts";

import "./AdminPanel.css";
import CreateNewProduct from "./CreateNewProduct";

const AdminPanel = ({ handleLogout }) => {
  const initialState = {
    collection: productsAllIds.map(
      (product) => productsByIdTEST[product].collection
    ),
    material: [
      ...new Set(
        productsAllIds.map((product) => productsByIdTEST[product].material)
      ),
    ],
  };

  return (
    <div className="admin-page">
      Admin PAnel
      <button onClick={handleLogout}>logout</button>
      <CreateNewProduct />
    </div>
  );
};

export default AdminPanel;
