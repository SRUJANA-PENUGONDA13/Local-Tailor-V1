import { addToWishlist } from "../../services/wishlist";
import { addToCart } from "../../services/cart";

const addProductToList = async (list, product, page) => {
  let products = [];
  const token = localStorage.getItem("token");

  if (page.toLowerCase() === "wishlist") {
    products = await addToWishlist(product, token);
  } else if (page.toLowerCase() === "cart") {
    products = await addToCart(product, token);
  }
  return products;
};

export { addProductToList };
