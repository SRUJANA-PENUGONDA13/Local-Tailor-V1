const isProductExistsInList = (list, product) => {
  const products = list.filter((item) => {
    return item._id === product._id;
  });

  return products.length > 0 ? true : false;
};

export { isProductExistsInList };
