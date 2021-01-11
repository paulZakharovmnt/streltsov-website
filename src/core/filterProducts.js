const reduceFilteredProducts = (filtered) => {
  return filtered.reduce(
    (acc, curr) => ((acc[curr.name] = { ...curr }), acc),
    {}
  );
};

const filterProducts = (filterProperty, productsById) => {
  if (filterProperty === "collection") {
    const filtered = Object.values(productsById).filter(
      (item) => item.collection === "Samurai"
    );
    return reduceFilteredProducts(filtered);
  }
  if (filterProperty === "type") {
    const filtered = Object.values(productsById).filter(
      (item) => item.type === "Pen"
    );
    return reduceFilteredProducts(filtered);
  }

  return productsById;
};

export default filterProducts;
