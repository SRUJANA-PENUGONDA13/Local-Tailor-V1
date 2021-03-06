import axios from "axios";

const getWishlistProducts = async (token) => {
  try {
    const {
      data: { wishlist },
    } = await axios.get("/api/user/wishlist", {
      headers: { authorization: token },
    });
    return wishlist;
  } catch (e) {
    console.error(e);
    return [];
  }
};
export { getWishlistProducts };
