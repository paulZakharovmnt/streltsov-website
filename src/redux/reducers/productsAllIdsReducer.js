import { productsAllIds } from "../../core/TestProducts";

const productsAllIdsReducer = (state = productsAllIds, action) => {
  switch (action.type) {
    case "SET_ALL_PRODUCTS_FROM_FB":
      return Object.keys(action.payload);
    case "ADD_PRODUCT":
      return [...state, action.payload.name];
    case "DELETE_PRODUCT":
      return state.filter((product) => product !== action.payload);
    default:
      return state;
  }
};

export default productsAllIdsReducer;
