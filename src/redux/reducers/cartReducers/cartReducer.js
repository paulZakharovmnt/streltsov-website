import deleteProductFromList from "../../../core/deleteProductFromList";

const cartReducer = (state = null, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      return { ...state, [action.payload.name]: action.payload };
    case "DELETE_PRODUCT_FROM_CART":
      const updatedProductList = deleteProductFromList(state, action.payload);
      return updatedProductList;
    case "INCREMENT_PRODUCT_QUONTITY":
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          quontity: state[action.payload].quontity + 1,
        },
      };
    case "DECREMENT_PRODUCT_QUONTITY":
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          quontity: state[action.payload].quontity - 1,
        },
      };
    case "CLEAR_ALL_CART":
      return null;
    default:
      return state;
  }
};

export default cartReducer;
