const productsAllIdsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ALL_PRODUCTS_FROM_FB":
      return Object.keys(action.payload);
    // case "ADD_CITY_TO_STATE":
    //   return [action.payload.name, ...state];
    // case "DELETE_CITY":
    //   return state.filter((cityName) => cityName !== action.payload);
    default:
      return state;
  }
};

export default productsAllIdsReducer;
