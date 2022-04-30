import { useProduct } from "../../context/index";
import { useState, useEffect } from "react";
import { updateBillDetails, updateQuantity } from "../../utils/cartBill/index";
import {
  addProductToList,
  removeProductFromList,
  isProductExistsInList,
} from "../../utils/generic";
import "./CartProductCard.css";
import "../productCard/ProductCard";

const CartProductCard = ({ productDetails }) => {
  const [quantity, setQuantity] = useState(1);
  const [{ wishlist, cart }, productDispatch] = useProduct();

  const updateCartBill = (products) => {
    const cartSummary = updateBillDetails(products);
    productDispatch({
      type: "UPDATE_BILL",
      payload: cartSummary,
    });
  };

  useEffect(() => {
    const updatedProducts = updateQuantity(cart, productDetails, quantity);
    productDispatch({
      type: "UPDATE_CART",
      payload: updatedProducts,
    });
    updateCartBill(updatedProducts);
  }, [quantity]);

  const removeCartHandler = (product) => {
    const cartProducts = removeProductFromList(cart, product);
    productDispatch({
      type: "UPDATE_CART",
      payload: cartProducts,
    });
    updateCartBill(cartProducts);
  };

  const addWishlistHandler = (product) => {
    removeCartHandler(product);
    if (!isProductExistsInList(wishlist, product)) {
      const products = addProductToList(wishlist, product);
      productDispatch({
        type: "UPDATE_WISHLIST",
        payload: products,
      });
    }
  };

  return (
    <>
      <div class="card horizontal-card">
        <div class="img-content">
          <img
            class="item-img"
            src={productDetails.image}
            alt="Card Header Image"
          />
        </div>
        <div class="card-content flex-dir-col">
          <h2 class="item-name">{productDetails.title}</h2>
          <div class="prices flex-dir-row">
            <span class="price">
              <b>Rs. {productDetails.discountPrice}</b>
            </span>
            <span class="initial-price">
              Rs. {productDetails.origincalPrice}
            </span>
          </div>
          <div className="discount-rating flex-dir-row">
            <span className="discount">
              <b>Save {productDetails.savePercent} %</b>
            </span>
            <span className="rating flex-dir-row">
              <b>{productDetails.rating}</b>
              <i className="fa fa-star"></i>
            </span>
          </div>
          <label for="quantity">
            Quantity :
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="5"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            />
          </label>
          <button
            class="btn remove-from-cart"
            onClick={() => removeCartHandler(productDetails)}
          >
            Remove from cart
          </button>
          <button
            class="btn add-to-wishlist"
            onClick={() => addWishlistHandler(productDetails)}
          >
            Add to wishlist
          </button>
        </div>
      </div>
    </>
  );
};

export { CartProductCard };
