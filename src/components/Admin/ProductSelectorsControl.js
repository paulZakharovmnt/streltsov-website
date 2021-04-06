import React, { useState } from "react";

const ProductSelectorsControl = () => {
  const selectorsAllIds = ["type", "penType", "material", "collection"];
  const selectorsById = {
    type: {
      name: "type",
      inputType: "input",
      options: null,
    },
    penType: {
      name: "penType",
      inputType: "select",
      options: ["Ballpoint", "Fountain"],
    },
    material: {
      name: "material",
      inputType: "select",
      options: ["Titanium", "Aluminium"],
    },
    collection: {
      name: "collection",
      inputType: "select",
      options: ["Dragon", "Jet"],
    },
  };
  const [allIds, setAllIds] = useState(selectorsAllIds);
  const [byId, setById] = useState(selectorsById);
  const [nameOfNew, setNameOfNew] = useState("");
  const [inputType, setInputType] = useState("");

  return (
    <div>
      {" "}
      <h2>Add New Product Type</h2>
      <input
        placeholder="name"
        onChange={(event) => setNameOfNew(event.target.value)}
      />
      <select onChange={(event) => setInputType(event.target.value)}>
        <option value="input">Input</option>
        <option value="selector">Selector</option>
        <option value="textArea">Checkbox</option>
      </select>
      {/* <h2>Add new</h2>
      <input
        placeholder="name"
        onChange={(event) => setNameOfNew(event.target.value)}
      />
      <select onChange={(event) => setInputType(event.target.value)}>
        <option value="input">Input</option>
        <option value="selector">Selector</option>
        <option value="textArea">Checkbox</option>
      </select> */}
    </div>
  );
};

export default ProductSelectorsControl;
