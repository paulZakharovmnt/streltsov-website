import React, { useState } from "react";
import AddNewProductType from "../Admin/AddNewProductType";
import AddProductFeatures from "../Admin/AddProductFeatures";
import CreateNewProduct from "../Admin/CreateNewProduct";
import ProductsControlPanel from "../Admin/ProductsControlPanel";
import ProductSelectorsControl from "../Admin/ProductSelectorsControl";
import "./Gallery.css";

const Gallery = () => {
  const tabs = [
    "Add new Product",
    "list of products",
    "Product Selector Control",
    "Add Product Type",
    "Add Product Features",
  ];
  const [selectedTab, setSelectedTab] = useState(0);

  const renderSwitch = () => {
    switch (selectedTab) {
      case 0:
        return <CreateNewProduct />;
      case 1:
        return <ProductsControlPanel />;
      case 2:
        return <ProductSelectorsControl />;
      case 3:
        return <AddNewProductType />;
      case 4:
        return <AddProductFeatures />;
      default:
        break;
    }
  };

  return (
    <div className="admin">
      <div className="tabs-container">
        <div className="tab-selector">
          {tabs.map((tab, id) => {
            return (
              <div
                onClick={() => setSelectedTab(id)}
                className="tab-btn"
                key={tab}
              >
                {tab}
              </div>
            );
          })}
        </div>
      </div>
      {renderSwitch()}
    </div>
  );
};

export default Gallery;
