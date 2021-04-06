import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import getUniqueValues from "../../core/getUniqueValues";
import { addNewType } from "../../redux/actions/actions";

const AddNewProductType = ({ selectedFeature }) => {
  const settings = useSelector((state) => state.settingsReducer);
  const typesAllIds = settings.settingsById.productType.allIds;
  const typesById = settings.settingsById.productType.byId;
  const uniqueParentCategories = getUniqueValues(
    typesAllIds,
    typesById,
    "category"
  );

  const dispatch = useDispatch();

  const [newType, setNewType] = useState("");
  const [parentCategory, setParentCategory] = useState("");
  const [newParentCategory, setNewPArentCategory] = useState("");
  const [imageLink, setImageLink] = useState("");

  const clearAllInputs = () => {
    setNewType("");
    setParentCategory("");
    setNewPArentCategory("");
    setImageLink("");
  };

  const createNewProductType = () => {
    console.log({
      selectedFeature,
      featureInfo: {
        name: newType,
        category: newParentCategory === "" ? parentCategory : newParentCategory,
        image: imageLink,
      },
    });

    dispatch(
      addNewType({
        selectedFeature,
        featureInfo: {
          name: newType,
          category:
            newParentCategory === "" ? parentCategory : newParentCategory,
          image: imageLink,
        },
      })
    );
    clearAllInputs();
  };

  return (
    <div>
      <input
        onChange={(event) => setNewType(event.target.value)}
        placeholder="type"
        value={newType}
      />

      <input
        placeholder="image link"
        onChange={(event) => setImageLink(event.target.value)}
        value={imageLink}
      />
      <select onChange={(event) => setParentCategory(event.target.value)}>
        <option value="">Select group</option>
        {uniqueParentCategories.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
        <option value="new">Add New</option>
      </select>
      {parentCategory === "new" && (
        <div>
          <input
            value={newParentCategory}
            placeholder="name"
            onChange={(event) => setNewPArentCategory(event.target.value)}
          />
        </div>
      )}
      <button onClick={createNewProductType}>Add new type</button>
    </div>
  );
};

export default AddNewProductType;
