import React, { useEffect, useState } from "react";
import classNames from "classnames";
import "./FilterBar.css";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import {
  changePriceSort,
  changeCollectionFilter,
  changePenTypeFilter,
} from "../../../redux/actions/actions";

const FilterBar = ({}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [showFilterByMaterial, setShowFilterByMaterial] = useState(true);
  const [showFilterByCollection, setShowFilterByCollection] = useState(false);
  const [showFilterByPrice, setShowFilterByPrice] = useState(false);
  // const filters = useSelector((state) => state.filtersReducer);

  const productsById = useSelector((state) => state.productsByIdReducer);
  const productsAllIds = useSelector((state) => state.productsAllIdsReducer);
  const dispatch = useDispatch();

  const clearFilters = () => {
    dispatch(changePenTypeFilter(""));
    dispatch(changeCollectionFilter(""));
    dispatch(changePriceSort(""));
  };

  // console.log(filters);

  useEffect(() => {
    setShowFilterByMaterial(false);
    setShowFilterByCollection(false);
    setShowFilterByPrice(false);
  }, []);

  const showFiltersBTNClasses = classNames("filter-btn", {
    opened: showFilters,
  });

  const filters = {
    byCollection: {
      name: "By Collection",
      value: "",
    },
    byPenType: {
      name: "By Pen Type",
      value: "",
    },
    byPrice: {
      name: "By Price",
      value: "",
    },
  };

  // console.log(productsById);
  // console.log(productsAllIds);

  // console.log(filters.byPenType);

  // Object.keys(filters).map((filter) => console.log(filter));

  return (
    <div className="filter-bar">
      <div
        className={showFiltersBTNClasses}
        onClick={() => setShowFilters(!showFilters)}
      >
        <p>Filters</p>
        <div className="filter-small-traingle"></div>
      </div>
      {showFilters && (
        <div className="filters-container">
          {Object.keys(filters).map((filter) => {
            return <Filter filters={filters} filter={filter} />;
          })}

          {/* <div className="filter-type">
            <div className="small-traingle-left"></div>
            <div
              className="filter-props"
              onClick={() => setShowFilterByMaterial(!showFilterByMaterial)}
            >
              <p>By Pen type:</p>
              <p>
                {filters.byPenType.value === ""
                  ? "All"
                  : filters.byPenType.value}
              </p>
            </div>

            <div className="small-traingle-right"></div>
            {showFilterByMaterial && (
              <div className="filter-by-props-container">
                <div
                  className="filter-by-prop"
                  onClick={() => dispatch(changePenTypeFilter(""))}
                >
                  All
                </div>
                <div
                  className="filter-by-prop"
                  onClick={() => dispatch(changePenTypeFilter("Ballpoint"))}
                >
                  Ballpoint
                </div>
                <div
                  className="filter-by-prop"
                  onClick={() => dispatch(changePenTypeFilter("Fountain"))}
                >
                  Fountain
                </div>
              </div>
            )}
          </div>
          <div className="filter-type">
            <div className="small-traingle-left"></div>
            <div
              className="filter-props"
              onClick={() => setShowFilterByCollection(!showFilterByCollection)}
            >
              <p>By Collection:</p>
              <p>
                {filters.byCollection.value === ""
                  ? "All"
                  : filters.byCollection.value}
              </p>
            </div>
            <div className="small-traingle-right"></div>
            {showFilterByCollection && (
              <div className="filter-by-props-container">
                <div
                  className="filter-by-prop"
                  onClick={() => dispatch(changeCollectionFilter(""))}
                >
                  All
                </div>
                <div
                  className="filter-by-prop"
                  onClick={() =>
                    dispatch(changeCollectionFilter("Dragon&Moon"))
                  }
                >
                  Dragon&Moon
                </div>
                <div
                  className="filter-by-prop"
                  onClick={() => dispatch(changeCollectionFilter("Klimt duet"))}
                >
                  Klimt duet
                </div>
              </div>
            )}
          </div> */}
          {/* <div className="filter-type">
            <div className="small-traingle-left"></div>
            <div
              className="filter-props"
              onClick={() => setShowFilterByPrice(!showFilterByPrice)}
            >
              <p>By Price:</p>
              <p>None</p>
            </div>
            <div className="small-traingle-right"></div>
            {showFilterByPrice && (
              <div className="filter-by-props-container">
                <div
                  className="filter-by-prop"
                  onClick={() => dispatch(changePenTypeFilter(""))}
                >
                  All
                </div>
                <div
                  className="filter-by-prop"
                  onClick={() => dispatch(changePenTypeFilter("Ballpoint"))}
                >
                  Ballpoint
                </div>
                <div
                  className="filter-by-prop"
                  onClick={() => dispatch(changePenTypeFilter("Fountain"))}
                >
                  Fountain
                </div>
              </div>
            )}
          </div> */}
          <div className="filter-type">
            <div className="small-traingle-left"></div>
            <div className="filter-props">
              <p>Clear all Filters</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
