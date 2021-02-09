import React, { useState } from "react";

const Filter = ({ filters, filter }) => {
  const [showFilterProps, setShowFilterProps] = useState(false);

  const filterInfo = filters[filter];
  console.log(filterInfo);
  return (
    <div className="filter-type">
      <div className="small-traingle-left"></div>
      <div
        className="filter-props"
        onClick={() => setShowFilterProps(!showFilterProps)}
      >
        <p>By Pen type:</p>
        <p>{filterInfo.value === "" ? "All" : filterInfo.value}</p>
      </div>

      <div className="small-traingle-right"></div>
      {showFilterProps && (
        <div className="filter-by-props-container">
          <div
            className="filter-by-prop"
            // onClick={() => dispatch(changePenTypeFilter(""))}
          >
            All
          </div>
          <div
            className="filter-by-prop"
            // onClick={() => dispatch(changePenTypeFilter("Ballpoint"))}
          >
            Ballpoint
          </div>
          <div
            className="filter-by-prop"
            // onClick={() => dispatch(changePenTypeFilter("Fountain"))}
          >
            Fountain
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
