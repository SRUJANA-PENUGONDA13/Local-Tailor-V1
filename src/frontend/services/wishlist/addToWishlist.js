import axios from "axios";

const addToWishlist = async (product, token) => {
  try {
    const {
      data: { wishlist },
    } = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: { authorization: token },
      }
    );

    return wishlist;
  } catch (e) {
    console.log(e);
    return [];
  }
};
export { addToWishlist };
