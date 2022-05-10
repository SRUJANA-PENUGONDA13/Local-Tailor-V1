import axios from "axios";

const removeFromCart = async (_id, token) => {
  try {
    const {
      data: { cart },
    } = await axios.delete(`/api/user/cart/${_id}`, {
      headers: { authorization: token },
    });
    return cart;
  } catch (e) {
    console.error(e);
    return [];
  }
};
export { removeFromCart };
