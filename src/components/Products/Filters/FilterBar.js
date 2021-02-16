import React, { useState } from "react";
import classNames from "classnames";
import "./FilterBar.css";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import Slide from "react-reveal/Slide";
import { clearAllFilters } from "../../../redux/actions/actions";

const FilterBar = () => {
  const [showFilters, setShowFilters] = useState(false);
  const filters = useSelector((state) => state.filtersReducer);
  const dispatch = useDispatch();

  const showFiltersBTNClasses = classNames("filter-btn", {
    opened: showFilters,
  });

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
        <Slide right>
          <div className="filters-container">
            {Object.keys(filters).map((filter) => {
              return <Filter key={filter} filters={filters} filter={filter} />;
            })}
            <div className="filter-type">
              <div className="small-traingle-left"></div>
              <div
                className="filter-props"
                onClick={() => dispatch(clearAllFilters())}
              >
                <p>Clear all Filters</p>
              </div>
            </div>
          </div>
        </Slide>
      )}
    </div>
  );
};

export default FilterBar;
