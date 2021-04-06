import React from "react";
import "./EditProductModal.css";

const EditProductModal = ({ productToEdit, closeModal }) => {
  console.log(productToEdit);
  return (
    <div className="edit-modal">
      <div className="edit-container">
        <div onClick={closeModal}>Close</div>
      </div>
    </div>
  );
};

export default EditProductModal;
