const initialState = {
  collection: {
    id: "collection",
    name: "By Collection",
    value: "",
  },
  penType: {
    id: "penType",
    name: "By Pen Type",
    value: "",
  },
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_FILTER":
      return {
        ...state,
        [action.payload.filterToChange]: {
          ...state[action.payload.filterToChange],
          value: action.payload.filterValue,
        },
      };
    case "CLEAR_ALL_FILTERS":
      return initialState;
    case "CHANGE_PRICE_FILTER":
      return { ...state, price: action.payload };
    default:
      return state;
  }
};

export default filtersReducer;
