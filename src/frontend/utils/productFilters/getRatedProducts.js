const getRatedProducts = (products, rating) => {
  return products.filter((product) => product.rating >= rating);
};

export { getRatedProducts };
