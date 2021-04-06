import { combineReducers } from "redux";
import productsAllIdsReducer from "./productsAllIdsReducer";
import productsByIdReducer from "./productsByIdReducer";
import productsAllIdsInCartReducer from "./cartReducers/productsAllIdsInCartReducer";
import cartReducer from "./cartReducers/cartReducer";
import filtersReducer from "./Filters/filtersReducer";
import cartPreviewReducer from "./cartReducers/cartPreviewReducer";
import settingsReducer from "./settings/settingsReducer";

const allReducers = combineReducers({
  productsAllIdsReducer,
  productsByIdReducer,
  cartReducer,
  productsAllIdsInCartReducer,
  filtersReducer,
  cartPreviewReducer,
  settingsReducer,
});

export default allReducers;
