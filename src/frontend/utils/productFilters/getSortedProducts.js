const getSortedProducts = (products, sortBy) => {
  if (sortBy === "low-high")
    return [...products].sort(
      (item1, item2) => item1.discountPrice - item2.discountPrice
    );

  if (sortBy === "high-low")
    return [...products].sort(
      (item1, item2) => item2.discountPrice - item1.discountPrice
    );

  return products;
};

export { getSortedProducts };
