const sortProductsByPrice = (productsAllIds, productsById) => {
  return productsAllIds.sort((a, b) => {
    return productsById[a].price > productsById[b].price
      ? 1
      : productsById[b].price > productsById[a].price
      ? -1
      : 0;
  });
};

export default sortProductsByPrice;
