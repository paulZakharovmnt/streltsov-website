const productsAllIdsInCartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      return [...state, action.payload.name];
    case "DELETE_PRODUCT_FROM_CART":
      return state.filter((product) => product !== action.payload);
    case "CLEAR_ALL_CART":
      return [];
    default:
      return state;
  }
};

export default productsAllIdsInCartReducer;
