import { productsByIdTEST } from "../../core/TestProducts";

const productsByIdReducer = (state = productsByIdTEST, action) => {
  switch (action.type) {
    case "SET_ALL_PRODUCTS_FROM_FB":
      return action.payload;
    case "ADD_PRODUCT":
      return { ...state, [action.payload.name]: action.payload };
    default:
      return state;
  }
};

export default productsByIdReducer;
