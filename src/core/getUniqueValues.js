const getUniqueValues = (allIdsArray, objectsByIds, key) => {
  return [
    ...new Set(
      allIdsArray.map((id) => objectsByIds[id][key]).filter((id) => id !== null)
    ),
  ];
};

export default getUniqueValues;
