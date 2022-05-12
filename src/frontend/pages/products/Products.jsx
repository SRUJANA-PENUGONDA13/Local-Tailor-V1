import React from "react";
import "./Products.css";
import { useProduct, useAuth } from "../../context/index";
import { useEffect, useState } from "react";
import { ProductList, Filters } from "../../components/index";
import { getCartProducts } from "../../services/cart";
import { getWishlistProducts } from "../../services/wishlist";
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
  const { isAuthenticated } = useAuth();
  const [displayFilters, setdisplayFilters] = useState(false);
  const [filterBtnText, setFilterBtnText] = useState("filters");
  const token = localStorage.getItem("token");

  useEffect(async () => {
    const innerWidth = window.innerWidth;
    innerWidth < 500 ? setdisplayFilters(false) : setdisplayFilters(true);

    try {
      productDispatch({ type: "UPDATE_LOADING_FLAG", payload: true });
      const {
        data: { products },
      } = await axios.get("/api/products");

      productDispatch({ type: "LOAD_ALL_PRODUCTS", payload: products });
      productDispatch({ type: "UPDATE_LOADING_FLAG", payload: false });

      if (isAuthenticated) {
        const cartProducts = await getCartProducts(token);
        productDispatch({
          type: "UPDATE_CART",
          payload: cartProducts,
        });

        const wishlistProducts = await getWishlistProducts(token);
        productDispatch({
          type: "UPDATE_WISHLIST",
          payload: wishlistProducts,
        });
      }
    } catch (e) {
      console.error("Error in retrieving products data", e);
    }
  }, []);

  useEffect(() => {
    displayFilters ? setFilterBtnText("close") : setFilterBtnText("filters");
  }, [displayFilters]);

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
      {displayFilters && <Filters />}
      <div className="product-body flex-dir-col">
        <button
          className="btn filters-btn primary-btn"
          onClick={() => setdisplayFilters(!displayFilters)}
        >
          {filterBtnText}
        </button>
        <h2 className="products-header">Showing All Products</h2>
        <ProductList products={sortedProducts} page="products" />
      </div>
    </main>
  );
};

export { Products };
