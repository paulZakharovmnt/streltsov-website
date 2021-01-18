export const setProductsToStateFromFB = (products) => {
  return {
    type: "SET_ALL_PRODUCTS_FROM_FB",
    payload: products,
  };
};

export const addProductToCart = (product) => {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: product,
  };
};

export const deleteProductFromCart = (product) => {
  return {
    type: "DELETE_PRODUCT_FROM_CART",
    payload: product,
  };
};
export const clearCart = () => {
  return {
    type: "CLEAR_ALL_CART",
  };
};

export const incrementProductQuontity = (product) => {
  return {
    type: "INCREMENT_PRODUCT_QUONTITY",
    payload: product,
  };
};

export const decrementProductQuontity = (product) => {
  return {
    type: "DECREMENT_PRODUCT_QUONTITY",
    payload: product,
  };
};

export const changePriceSort = (filterProp) => {
  return {
    type: "CHANGE_PRICE_FILTER",
    payload: filterProp,
  };
};

export const changeCollectionFilter = (filterProp) => {
  return {
    type: "CHANGE_COLLECTION_FILTER",
    payload: filterProp,
  };
};
export const changeMaterialFilter = (filterProp) => {
  return {
    type: "CHANGE_MATERIAL_FILTER",
    payload: filterProp,
  };
};
