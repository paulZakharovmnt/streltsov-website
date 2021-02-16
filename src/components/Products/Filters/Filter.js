import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../../redux/actions/actions";

const Filter = ({ filters, filter }) => {
  const [showFilterProps, setShowFilterProps] = useState(false);
  const productsById = useSelector((state) => state.productsByIdReducer);
  const productsAllIds = useSelector((state) => state.productsAllIdsReducer);

  const dispatch = useDispatch();

  const filterInfo = filters[filter];
  const penIds = productsAllIds.filter(
    (product) => productsById[product].type === "Pen"
  );

  useEffect(() => {
    setShowFilterProps(false);
  }, [filters]);

  const allFilterProps = penIds.map((pen) => productsById[pen][filter]);

  return (
    <div className="filter-type">
      <div className="small-traingle-left"></div>
      <div
        className="filter-props"
        onClick={() => setShowFilterProps(!showFilterProps)}
      >
        <p>{filters[filter].name}:</p>
        <p>{filterInfo.value === "" ? "All" : filterInfo.value}</p>
      </div>

      <div className="small-traingle-right"></div>
      {showFilterProps && (
        <div className="filter-by-props-container">
          <div
            className="filter-by-prop"
            onClick={() => dispatch(changeFilter(filter, ""))}
          >
            ALL
          </div>
          {allFilterProps.map((prop) => {
            return (
              <div
                key={prop}
                className="filter-by-prop"
                onClick={() => dispatch(changeFilter(filter, prop))}
              >
                {prop}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Filter;
