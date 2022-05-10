import axios from "axios";

const updateProductQuantity = async (type, _id, token) => {
  try {
    const {
      data: { cart },
    } = await axios.post(
      `/api/user/cart/${_id}`,
      { action: { type: type } },
      {
        headers: { authorization: token },
      }
    );
    return cart;
  } catch (e) {
    console.error(e);
    return [];
  }
};
export { updateProductQuantity };
