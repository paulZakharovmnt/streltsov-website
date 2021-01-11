import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { productsByIdTEST, productsById } from "../../core/TestProducts";
import filterProducts from "../../core/filterProducts";
// import filterProductAllIds from "../../core/filterProductAllIds";
import "./Products.css";

const Products = () => {
  const [showFiltersBar, setShowFiltersBar] = useState(false);
  const [filteredBy, setFilteredBy] = useState(null);

  const productsById = useSelector((state) => state.productsByIdReducer);

  let filteredProductsAllIds = [];

  if (productsById !== null) {
    const filteredProducts = filterProducts(filteredBy, productsById);
    filteredProductsAllIds = Object.keys(filteredProducts);
  }

  return (
    <div className="products-page">
      <div className="products-header">PENS</div>
      <div className="filter-container">
        <button onClick={() => setShowFiltersBar(!showFiltersBar)}>
          Filters
        </button>
        {showFiltersBar && (
          <div className="filters">
            <select onChange={(event) => setFilteredBy(event.target.value)}>
              <option value={null}>Show all</option>
              <option value="collection">Collection</option>
              <option value="type">Type</option>
            </select>
          </div>
        )}
      </div>
      <div className="list-of-products-container">
        <div className="list-of-products">
          {filteredProductsAllIds.map((product) => (
            <div key={product} className="product-container">
              <img src={productsById[product].image} alt="" />
              <div className="product-info-line">
                <h3>{productsById[product].name}</h3>
                <h3>
                  <Link to={`/products/${product}`}>See details</Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
