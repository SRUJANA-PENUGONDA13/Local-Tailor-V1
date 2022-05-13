import axios from "axios";

const getCartProducts = async (token) => {
  try {
    const {
      data: { cart },
    } = await axios.get("/api/user/cart", {
      headers: { authorization: token },
    });
    return cart;
  } catch (e) {
    console.error(e);
    return [];
  }
};
export { getCartProducts };
