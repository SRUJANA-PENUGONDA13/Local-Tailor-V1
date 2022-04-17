const getProductInPriceRange = (products, price) => {
  return products.filter((product) => product.discountPrice <= price);
};

export { getProductInPriceRange };
