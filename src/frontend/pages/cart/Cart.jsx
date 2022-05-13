import React from "react";
import "./Cart.css";
import { CartProductList, CartPrice } from "../../components";
import { useProduct } from "../../context/index";
import { useEffect } from "react";

const Cart = () => {
  const [{ cart }, productDispatch] = useProduct();
  const cartItemsCount = cart.length;

  return (
    <main class="cart-container container-spacing">
      <h2 class="cart-header">MY CART({cartItemsCount})</h2>
      <div class="cart-body">
        <CartProductList products={cart} />
        <CartPrice products={cart} />
      </div>
    </main>
  );
};

export { Cart };
