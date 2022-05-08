import { updateProductQuantity } from "../../services/cart";

const updateQuantity = async (productId, actionType) => {
  const token = localStorage.getItem("token");

  const updatedProducts = await updateProductQuantity(
    actionType,
    productId,
    token
  );
  return updatedProducts;
};

export { updateQuantity };
