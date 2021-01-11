const deleteProductFromList = (productsList, productId) => {
  return Object.keys(productsList).reduce((obj, key) => {
    if (key !== productId) {
      obj[key] = productsList[key];
    }
    return obj;
  }, {});
};

export default deleteProductFromList;
