const countProductsSubtotal = (productsInCart, productsAllIdsInCart) => {
  if (productsAllIdsInCart.length < 1) {
    return;
  }
  return productsAllIdsInCart.reduce((sum, curr) => {
    return sum + productsInCart[curr].quontity * productsInCart[curr].price;
  }, 0);
};

export default countProductsSubtotal;
