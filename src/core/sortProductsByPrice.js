const sortProductsByPrice = (productsById) => {
  return Object.values(productsById).sort((a, b) => {
    return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
  });
};

export default sortProductsByPrice;
