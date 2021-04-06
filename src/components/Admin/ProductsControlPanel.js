import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./ProductsControlPanel.css";
import ProductInfo from "./ProductInfo";
import EditProductModal from "./EditProductModal";

const ProductsControlPanel = () => {
  const productsAllIds = useSelector((state) => state.productsAllIdsReducer);
  const productsById = useSelector((state) => state.productsByIdReducer);
  const [searchInput, setSearchInput] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [filter, setFilter] = useState("");

  const handleOpenEditModalClick = (product) => {
    setShowEditModal(true);
    setProductToEdit(product);
  };

  const closeModal = () => {
    setShowEditModal(false);
    setProductToEdit(null);
  };

  return (
    <div className="control-panel">
      <input
        placeholder="search"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      {productsAllIds
        .filter((product) =>
          searchInput.toLowerCase() === ""
            ? true
            : product.toLowerCase().includes(searchInput.toLowerCase())
        )
        .map((product) => (
          <ProductInfo
            product={product}
            productsById={productsById}
            key={product}
            handleOpenEditModalClick={handleOpenEditModalClick}
          />
        ))}
      {showEditModal && (
        <EditProductModal
          productToEdit={productToEdit}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default ProductsControlPanel;
