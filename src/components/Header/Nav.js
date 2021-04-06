import React from "react";
import "./Nav.css";
import DesktopNavPanel from "./DesktopNav/DesktopNavPanel";
import MobileNavPanel from "./MobileNav/MobileNavPanel";
import getUniqueValues from "../../core/getUniqueValues";
import { useSelector } from "react-redux";

const Nav = () => {
  const productCategoriesAllIds = useSelector(
    (state) => state.settingsReducer.settingsById.productType.allIds
  );
  const productCategoriesById = useSelector(
    (state) => state.settingsReducer.settingsById.productType.byId
  );

  // console.log(productCategoriesById);

  const uniqueProductCategories = getUniqueValues(
    productCategoriesAllIds,
    productCategoriesById,
    "category"
  );

  return (
    <div className="nav">
      <div className="nav-desktop">
        <DesktopNavPanel
          uniqueProductCategories={uniqueProductCategories}
          productsCategories={productCategoriesById}
          productsCategoriesIds={productCategoriesAllIds}
        />
      </div>
      <div className="nav-mobile">
        <MobileNavPanel
          uniqueProductCategories={uniqueProductCategories}
          productsCategories={productCategoriesById}
          productsCategoriesIds={productCategoriesAllIds}
        />
      </div>
    </div>
  );
};

export default Nav;
