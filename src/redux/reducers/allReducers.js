import { combineReducers } from "redux";
import productsAllIdsReducer from "./productsAllIdsReducer";
import productsByIdReducer from "./productsByIdReducer";
import productsAllIdsInCartReducer from "./cartReducers/productsAllIdsInCartReducer";
import cartReducer from "./cartReducers/cartReducer";

const allReducers = combineReducers({
  productsAllIdsReducer,
  productsByIdReducer,
  cartReducer,
  productsAllIdsInCartReducer,
});

export default allReducers;
