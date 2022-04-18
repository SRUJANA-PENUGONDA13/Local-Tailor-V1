const getProductsByTailor = (products, tailors) => {
  let isTailorSelected = false;
  Object.entries(tailors).forEach(([tailor, status]) => {
    if (status === true && !isTailorSelected) {
      isTailorSelected = true;
    }
  });

  if (!isTailorSelected) return products;

  return products.filter((product) => {
    if (tailors[product.tailorName.toLowerCase()]) return product;
  });
};

export { getProductsByTailor };
