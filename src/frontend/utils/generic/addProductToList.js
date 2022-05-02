const addProductToList = (list, product, page) => {
  const products = [];
  page === "wishlist"
    ? products.push(...list, product)
    : products.push(...list, { ...product, qty: 1 });

  return products;
};

export { addProductToList };
