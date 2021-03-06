import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ProductsPageByType.css";
import FilterBar from "./Filters/FilterBar";
import headerImg from "../../img/DSC03510.jpg";
import Product from "./Product";
import { childLinks } from "../../core/NavigationLinks";
import Fade from "react-reveal/Fade";

const ProductsPageByType = () => {
  const { childLink } = useParams();
  const filters = useSelector((state) => state.filtersReducer);
  const productsById = useSelector((state) => state.productsByIdReducer);
  const productsAllIds = useSelector((state) => state.productsAllIdsReducer);

  console.log(childLink);
  const productTypeImage = childLinks;

  return (
    <div className="productByType-page">
      <Fade>
        <div className="productByType-intro">
          <h1>{childLink}</h1>
          <div className="productByType-intro-photo-container">
            <img className="productByType-intro-photo" src={headerImg} alt="" />
          </div>
        </div>
      </Fade>
      {childLink === "Pen" && (
        <div className="filter-container">
          <FilterBar />
        </div>
      )}

      <div className="productByType-list">
        {productsAllIds
          .filter((product) => productsById[product].type === childLink)
          .filter((product) =>
            filters.collection.value === ""
              ? true
              : productsById[product].collection === filters.collection.value
          )
          .filter((product) =>
            filters.penType.value === ""
              ? true
              : productsById[product].penType === filters.penType.value
          )
          .map((product) => (
            <Product
              productsById={productsById}
              product={product}
              key={product}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductsPageByType;
