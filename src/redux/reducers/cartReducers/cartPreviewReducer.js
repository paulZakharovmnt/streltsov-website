const cartPreviewReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_CART_PREVIEW":
      return action.payload;
    default:
      return state;
  }
};

export default cartPreviewReducer;
