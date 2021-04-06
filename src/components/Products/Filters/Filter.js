import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../../redux/actions/actions";
import getUniqueValues from "../../../core/getUniqueValues";

const Filter = ({ filter }) => {
  const [showFilterProps, setShowFilterProps] = useState(false);
  const productsById = useSelector((state) => state.productsByIdReducer);
  const productsAllIds = useSelector((state) => state.productsAllIdsReducer);

  const dispatch = useDispatch();

  const pensIds = productsAllIds.filter(
    (product) => productsById[product].productType === "Pen"
  );

  const uniqueFilterValues = getUniqueValues(pensIds, productsById, filter.id);

  useEffect(() => {
    setShowFilterProps(false);
  }, [filter]);

  return (
    <div
      className="filter-type"
      onClick={() => setShowFilterProps(!showFilterProps)}
    >
      <div className="small-traingle-left"></div>
      <div className="filter-props">
        <p>{filter.name}:</p>
        <p>{filter.value === "" ? "All" : filter.value}</p>
      </div>

      <div className="small-traingle-right"></div>
      {showFilterProps && (
        <div className="filter-by-props-container">
          <div
            className="filter-by-prop"
            onClick={() => dispatch(changeFilter(filter.id, ""))}
          >
            ALL
          </div>
          {uniqueFilterValues.map((value) => {
            return (
              <div
                key={value}
                className="filter-by-prop"
                onClick={() => dispatch(changeFilter(filter.id, value))}
              >
                {value}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Filter;
