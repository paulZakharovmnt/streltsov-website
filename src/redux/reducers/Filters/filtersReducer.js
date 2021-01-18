const initialState = {
  byPrice: "",
  byCollection: "",
  byMaterial: "",
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_PRICE_FILTER":
      return { ...state, byPrice: action.payload };
    case "CHANGE_COLLECTION_FILTER":
      return { ...state, byCollection: action.payload };
    case "CHANGE_MATERIAL_FILTER":
      return { ...state, byMaterial: action.payload };
    default:
      return state;
  }
};

export default filtersReducer;
