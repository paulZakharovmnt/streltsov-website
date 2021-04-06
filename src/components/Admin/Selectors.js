import React, { useEffect, useState } from "react";
import getUniqueValues from "../../core/getUniqueValues";

const Selectors = ({
  productsById,
  productsAllIds,
  selector,
  getSelectorOption,
}) => {
  const [selectorState, setSelectorState] = useState("");

  const uniqueSelectors = getUniqueValues(
    productsAllIds,
    productsById,
    selector
  );

  useEffect(() => {
    getSelectorOption(selectorState, selector);
  }, [selectorState]);

  console.log(uniqueSelectors);
  return (
    <div>
      <h4>{selector}</h4>
      <select onChange={(event) => setSelectorState(event.target.value)}>
        {uniqueSelectors.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Selectors;
