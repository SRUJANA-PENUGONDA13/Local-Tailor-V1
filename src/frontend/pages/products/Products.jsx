import React from "react";
import "./Products.css";
import { useProduct } from "../../context/index";
import { useEffect } from "react";
import { ProductList, Filters } from "../../components/index";
import axios from "axios";
import {
  getProductsByTailor,
  getCategorizedProducts,
  getProductInPriceRange,
  getRatedProducts,
  getSortedProducts,
} from "../../utils/productFilters/index";

const Products = () => {
  const [{ products, filters }, productDispatch] = useProduct();

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get("/api/products");
        productDispatch({ type: "LOAD_ALL_PRODUCTS", payload: products });
      } catch (e) {
        console.error("Error in retrieving products data", e);
      }
    })();
  }, []);

  const selectedPriceRangeProducts = getProductInPriceRange(
    products,
    filters.price
  );

  const selectedTailorProducts = getProductsByTailor(
    selectedPriceRangeProducts,
    filters.tailors
  );

  const selectedCategoryProducts = getCategorizedProducts(
    selectedTailorProducts,
    filters.categories
  );

  const selectedRatedProducts = getRatedProducts(
    selectedTailorProducts,
    filters.rating
  );

  const sortedProducts = getSortedProducts(
    selectedRatedProducts,
    filters.sortBy
  );
  return (
    <main className="product-container container-spacing flex-dir-row">
      <Filters />
      <ProductList products={sortedProducts} />
    </main>
  );
};

export { Products };
