import { Categories } from "../../components";

const getCategorizedProducts = (products, categories) => {
  let isCategorySelected = false;
  Object.entries(categories).forEach(([categorie, status]) => {
    if (status === true && !isCategorySelected) {
      isCategorySelected = true;
    }
  });

  if (!isCategorySelected) return products;

  return products.filter((product) => {
    if (categories[product.categoryName.toLowerCase()]) return product;
  });
};

export { getCategorizedProducts };
