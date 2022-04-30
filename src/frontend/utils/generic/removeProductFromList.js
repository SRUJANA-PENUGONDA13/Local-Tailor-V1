const removeProductFromList = (list, product) => {
  const products = list.filter((item) => item._id !== product._id);
  return products;
};

export { removeProductFromList };
