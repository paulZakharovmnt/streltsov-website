import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Products.css";
import FilterBar from "./Filters/FilterBar";

const Products = () => {
  const { childLink } = useParams();
  const filtersState = useSelector((state) => state.filtersReducer);
  const productsById = useSelector((state) => state.productsByIdReducer);
  const productsAllIds = useSelector((state) => state.productsAllIdsReducer);

  console.log(childLink);

  // console.log(
  //   productsAllIds.sort((a, b) => {
  //     return productsById[a].price > productsById[b].price
  //       ? -1
  //       : productsById[b].price > productsById[a].price
  //       ? 1
  //       : 0;
  //   })
  // );

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>{childLink}</h1>
      </div>
      <FilterBar />

      <div className="list-of-products-container">
        <div className="list-of-products">
          {productsAllIds
            .filter((product) => productsById[product].type === childLink)
            .filter((product) =>
              filtersState.byMaterial
                ? productsById[product].material === filtersState.byMaterial
                : true
            )
            .filter((product) =>
              filtersState.byCollection
                ? productsById[product].collection === filtersState.byCollection
                : true
            )

            .map((product) => (
              <div key={product} className="product-container">
                <img src={productsById[product].image} alt="" />
                <div className="product-info-line">
                  <h3>{productsById[product].name}</h3>
                  <h3>Price: {productsById[product].price}</h3>
                  <h3>
                    <Link to={`/products/${childLink}/${product}`}>
                      See details
                    </Link>
                  </h3>
                </div>
              </div>
            ))}
          {/* <div className="white-cube-test"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
