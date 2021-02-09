import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ProductsPageByType.css";
import FilterBar from "./Filters/FilterBar";
import headerImg from "../../img/DSC03510.jpg";
import listImg from "../../img/Products/DSC09187.jpg";
import Product from "./Product";

const ProductsPageByType = () => {
  const { childLink } = useParams();
  // const filtersState = useSelector((state) => state.filtersReducer);
  const productsById = useSelector((state) => state.productsByIdReducer);
  const productsAllIds = useSelector((state) => state.productsAllIdsReducer);

  return (
    <div className="productByType-page">
      <div className="productByType-intro">
        <h1>{childLink}</h1>
        <div className="productByType-intro-photo-container">
          <img className="productByType-intro-photo" src={headerImg} alt="" />
        </div>
      </div>
      {childLink === "Pen" && (
        <div className="filter-container">
          <FilterBar />
        </div>
      )}

      <div className="productByType-list">
        {productsAllIds
          .filter((product) => productsById[product].type === childLink)
          .map((product) => (
            <Product
              productsById={productsById}
              product={product}
              listImg={listImg}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductsPageByType;
