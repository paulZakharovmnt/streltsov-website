import React, { useState } from "react";
import "./CreateNewProduct.css";
import { addNewProduct } from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";

const CreateNewProduct = () => {
  const initialInputsState = {
    name: "",
    productType: "",
    material: "",
    penType: null,
    collection: "",
    price: 0,
    description: "",
    inStock: false,
    featured: false,
    images: [],
    id: Math.floor(Math.random() * 100000),
  };
  const [imageLink, setImageLink] = useState("");
  const [testState, setTestState] = useState(initialInputsState);

  const productsAllIds = useSelector((state) => state.productsAllIdsReducer);
  const productsById = useSelector((state) => state.productsByIdReducer);
  const settings = useSelector((state) => state.settingsReducer);

  const allInputs = settings.settingAllIds.filter(
    (setting) => settings.settingsById[setting].type === "input"
  );
  const allTextarea = settings.settingAllIds.filter(
    (setting) => settings.settingsById[setting].type === "textarea"
  );
  const allSelectors = settings.settingAllIds.filter(
    (setting) => settings.settingsById[setting].type === "select"
  );

  const addImageToProduct = () => {
    setTestState({
      ...testState,
      images: [...testState.images, imageLink],
    });
    setImageLink("");
  };

  const dispatch = useDispatch();

  const getSelectorOption = (value, inputName) => {
    console.log(value, inputName);
    setTestState({
      ...testState,
      [inputName]: value,
    });
  };

  const createNewProduct = () => {
    dispatch(addNewProduct(testState));
    setTestState(initialInputsState);
  };

  const deleteImage = (imageLink) => {
    setTestState({
      ...testState,
      listOfImages: [
        ...testState.listOfImages.filter((image) => image !== imageLink),
      ],
    });
  };

  return (
    <div className="create-new-product">
      {allSelectors
        .filter((selector) => {
          return testState.productType === "Pen"
            ? true
            : selector !== "penType";
        })
        .map((selector) => {
          const childSettingAllIds = settings.settingsById[selector];
          return (
            <div key={selector}>
              <h4>{selector}</h4>
              <select
                onChange={(event) =>
                  getSelectorOption(event.target.value, selector)
                }
              >
                <option value="">Select one</option>
                {}
                {childSettingAllIds.allIds.map((settingId) => {
                  return (
                    <option value={settingId} key={settingId}>
                      {settingId}
                      {/* {childSettingAllIds.byId[settingId].name} */}
                    </option>
                  );
                })}
              </select>
            </div>
          );
        })}
      {allInputs.map((input) => {
        return (
          <div key={input}>
            <h4>{settings.settingsById[input].name}</h4>
            <input
              placeholder={settings.settingsById[input].name}
              type={settings.settingsById[input].inputType}
              onChange={(event) =>
                getSelectorOption(
                  settings.settingsById[input].inputType === "checkbox"
                    ? event.target.checked
                    : event.target.value,
                  input
                )
              }
            />
          </div>
        );
      })}

      {allTextarea.map((textarea) => {
        return (
          <div key={textarea}>
            <h4>{settings.settingsById[textarea].name}</h4>
            <textarea
              placeholder={settings.settingsById[textarea].name}
              onChange={(event) =>
                getSelectorOption(event.target.value, textarea)
              }
            />
          </div>
        );
      })}
      <div>
        <input
          value={imageLink}
          onChange={(event) => setImageLink(event.target.value)}
          placeholder="image link"
        />
        <button onClick={addImageToProduct}>Add image to product</button>
        <div className="array-images">
          {testState.images.map((imageLink) => {
            return (
              <div className="image-from-list" key={imageLink}>
                <img src={imageLink} alt="" />
                <div
                  onClick={() => deleteImage(imageLink)}
                  className="delete-iamge-btn"
                >
                  <p>X</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={createNewProduct}>Submit new product</button>
    </div>
  );
};

export default CreateNewProduct;
