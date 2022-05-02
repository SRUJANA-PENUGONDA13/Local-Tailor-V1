import React from "react";
import "./Wishlist.css";
import { useProduct } from "../../context/index";
import { ProductList } from "../../components/index";

const Wishlist = () => {
  const [{ wishlist }, productDispatch] = useProduct();

  return (
    <main class="wishlist-container container-spacing">
      <h2 class="wishlist-header">My Wishlist</h2>
      <div class="wishlist-body">
        <ProductList products={wishlist} page="wishlist" />
      </div>
    </main>
  );
};

export { Wishlist };
