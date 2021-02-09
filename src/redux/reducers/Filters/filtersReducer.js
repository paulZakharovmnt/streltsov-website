const initialState = {
  byPrice: "",
  byCollection: "",
  ByPenType: "",
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_PRICE_FILTER":
      return { ...state, byPrice: action.payload };
    case "CHANGE_COLLECTION_FILTER":
      return { ...state, byCollection: action.payload };
    case "CHANGE_PEN_TYPE_FILTER":
      return { ...state, ByPenType: action.payload };
    default:
      return state;
  }
};

export default filtersReducer;
