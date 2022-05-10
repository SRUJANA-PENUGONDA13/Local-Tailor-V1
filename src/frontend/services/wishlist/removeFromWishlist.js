import axios from "axios";

const removeFromWishlist = async (_id, token) => {
  try {
    const {
      data: { wishlist },
    } = await axios.delete(`/api/user/wishlist/${_id}`, {
      headers: { authorization: token },
    });
    return wishlist;
  } catch (e) {
    console.error(e);
    return [];
  }
};
export { removeFromWishlist };
