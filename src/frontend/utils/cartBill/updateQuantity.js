const updateQuantity = (products, product, quantity) => {
  const updatedProducts = products.map((item) =>
    item._id === product._id ? { ...item, qty: quantity } : item
  );

  return updatedProducts;
};

export { updateQuantity };
