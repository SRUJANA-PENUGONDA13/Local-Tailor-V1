import { removeFromWishlist } from "../../services/wishlist";
import { removeFromCart } from "../../services/cart";

const removeProductFromList = async (list, { _id }, page) => {
  let products = [];
  const token = localStorage.getItem("token");

  if (page === "wishlist") {
    products = await removeFromWishlist(_id, token);
    return products;
  } else if (page === "cart") {
    products = await removeFromCart(_id, token);
    return products;
  }
};

export { removeProductFromList };
