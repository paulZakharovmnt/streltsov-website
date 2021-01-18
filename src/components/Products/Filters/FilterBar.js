import React, { useState } from "react";
import classNames from "classnames";
import "./FilterBar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changePriceSort,
  changeCollectionFilter,
  changeMaterialFilter,
} from "../../../redux/actions/actions";

const FilterBar = ({}) => {
  const [showFilters, setShowFilters] = useState(false);
  const filters = useSelector((state) => state.filtersReducer);
  const dispatch = useDispatch();

  const clearFilters = () => {
    dispatch(changeMaterialFilter(""));
    dispatch(changeCollectionFilter(""));
    dispatch(changePriceSort(""));
  };

  const showFiltersBTNClasses = classNames("show-filters-button", {
    opened: showFilters,
  });

  //   const filterSideBarClasses = classNames("", {});
  return (
    <div className="filter-bar">
      {showFilters && (
        <div className="filters-container">
          <div className="filter-by-container">
            <p>By material:</p>
            <select
              onChange={(event) =>
                dispatch(changeMaterialFilter(event.target.value))
              }
              value={filters.byMaterial}
            >
              <option value="">Show all</option>
              <option value="Titanium">Titanium</option>
              <option value="Aluminium">Aluminium</option>
            </select>
          </div>
          <div className="filter-by-container">
            <p> Show Collection:</p>
            <select
              onChange={(event) =>
                dispatch(changeCollectionFilter(event.target.value))
              }
              value={filters.byCollection}
            >
              <option value="">Show all</option>
              <option value="Samurai">Samurai</option>
              <option value="Ninja">Ninja</option>
            </select>
          </div>
          <div className="filter-by-container">
            <p>Sort By Price:</p>
            <select
              onChange={(event) => {
                dispatch(changePriceSort(event.target.value));
              }}
              value={filters.byPrice}
            >
              <option value="">Type of sorting</option>
              <option value="highToLow">high to low</option>
              <option value="lowToHigh">low to high</option>
            </select>
          </div>
          <div>
            <button onClick={() => clearFilters()}>Clear all Filters</button>
          </div>
          <div className="left-border"></div>
        </div>
      )}
      <div
        className={showFiltersBTNClasses}
        onClick={() => setShowFilters(!showFilters)}
      >
        Filters
      </div>
    </div>
  );
};

export default FilterBar;
