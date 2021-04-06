import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddNewProductType from "./AddNewProductType";
import { addNewType } from "../../redux/actions/actions";

const AddProductFeatures = () => {
  const [selectedFeature, setSelectedFeature] = useState("");
  const [newFeatureInput, setNewFeatureInput] = useState("");
  const productsAllIds = useSelector((state) => state.productsAllIdsReducer);
  const productsById = useSelector((state) => state.productsByIdReducer);
  const settings = useSelector((state) => state.settingsReducer);
  const dispatch = useDispatch();
  const featuresToSelect = settings.settingAllIds.filter(
    (settingId) => settings.settingsById[settingId].type === "select"
  );

  const deleteFeatureOption = (selectedOption) => {
    console.log(selectedOption);
    const filteredProducts = productsAllIds.filter((product) => {
      return productsById[product][selectedFeature] === selectedOption;
    });
    console.log(filteredProducts);
    if (filteredProducts.length > 0) {
      console.log(
        "There are",
        filteredProducts.length,
        "with such feature. Please, first delete this products"
      );
      return;
    }
    console.log("This product feature has been deleted");
  };

  const addNewFeature = () => {
    // const payload = { selectedFeature, featureInfo: { name: newFeatureInput } };
    // console.log(
    //   settings.settingsById[payload.selectedFeature].byId[
    //     payload.featureInfo.name
    //   ]
    // );
    dispatch(
      addNewType({ selectedFeature, featureInfo: { name: newFeatureInput } })
    );

    // console.log(selectedFeature, value);
    // console.log(selectedFeature, newFeatureInput);
  };
  return (
    <div>
      <select onChange={(event) => setSelectedFeature(event.target.value)}>
        {featuresToSelect.map((feature) => {
          return (
            <option key={feature} value={feature}>
              {feature}
            </option>
          );
        })}
      </select>

      {selectedFeature !== "" && (
        <div>
          {settings.settingsById[selectedFeature].allIds.map(
            (featureOptionId) => {
              return (
                <div key={featureOptionId}>
                  <h4>{featureOptionId}</h4>
                  <button onClick={() => deleteFeatureOption(featureOptionId)}>
                    Delete
                  </button>
                </div>
              );
            }
          )}
          {selectedFeature === "productType" ? (
            <AddNewProductType selectedFeature={selectedFeature} />
          ) : (
            <div>
              <input
                value={newFeatureInput}
                onChange={(event) => setNewFeatureInput(event.target.value)}
              />
              <button onClick={addNewFeature}>Add new</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AddProductFeatures;
