import React from "react";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Products.css";
// import FilterBar from "./Filters/FilterBar";

const Products = () => {
  const { childLink } = useParams();
  // const filtersState = useSelector((state) => state.filtersReducer);
  const productsById = useSelector((state) => state.productsByIdReducer);
  const productsAllIds = useSelector((state) => state.productsAllIdsReducer);

  console.log(productsById);
  console.log(productsAllIds);

  return <div className="products-page"></div>;
};

export default Products;
