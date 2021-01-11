const filterProductAllIds = (filterProperty, productsById) => {
  if (filterProperty === "collection") {
    return Object.values(productsById).filter(
      (item) => item.collection === "Samurai"
    );
  }
  if (filterProperty === "type") {
    return Object.values(productsById).filter((item) => item.type === "Pen");
  }

  return productsById;
};

export default filterProductAllIds;
