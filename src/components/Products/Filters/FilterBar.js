import React, { useState } from "react";
import classNames from "classnames";
import "./FilterBar.css";
import Filter from "./Filter";

import { CSSTransition } from "react-transition-group";
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
      <CSSTransition
        in={showFilters}
        timeout={500}
        mountOnEnter
        unmountOnExit
        classNames="fba"
      >
        <div className="filters-container">
          {Object.values(filters).map((filter) => {
            return <Filter key={filter.name} filter={filter} product="pen" />;
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
      </CSSTransition>
    </div>
  );
};

export default FilterBar;
