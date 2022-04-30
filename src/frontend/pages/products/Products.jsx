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
        productDispatch({ type: "UPDATE_LOADING_FLAG", payload: true });
        const {
          data: { products },
        } = await axios.get("/api/products");

        productDispatch({ type: "LOAD_ALL_PRODUCTS", payload: products });
        productDispatch({ type: "UPDATE_LOADING_FLAG", payload: false });
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
    selectedCategoryProducts,
    filters.rating
  );

  const sortedProducts = getSortedProducts(
    selectedRatedProducts,
    filters.sortBy
  );
  return (
    <main className="product-container container-spacing flex-dir-row">
      <Filters />
      <div className="product-body flex-dir-col">
        <button
          className="btn filters-btn primary-btn"
          onClick={() => openFilters()}
        >
          filters
        </button>
        <h2 className="products-header">Showing All Products</h2>
        <ProductList products={sortedProducts} page="products" />
      </div>
    </main>
  );
};

export { Products };
