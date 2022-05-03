import "./ProductCard.css";
import { useState, useEffect } from "react";
import { useProduct } from "../../context/index";
import { Link, useNavigate } from "react-router-dom";
import { updateBillDetails } from "../../utils/cartBill/updateBillDetails";
import {
  addProductToList,
  removeProductFromList,
  isProductExistsInList,
} from "../../utils/generic/index";

const ProductCard = ({ productDetails, page }) => {
  const [wishlistState, setWishlistState] = useState(false);
  const [{ wishlist, cart }, productDispatch] = useProduct();
  const navigate = useNavigate();

  const wishListHandler = (product) => {
    setWishlistState(!wishlistState);

    if (wishlistState === true) {
      const products = removeProductFromList(wishlist, product);
      productDispatch({
        type: "UPDATE_WISHLIST",
        payload: products,
      });
    } else {
      const products = addProductToList(wishlist, product);
      productDispatch({
        type: "UPDATE_WISHLIST",
        payload: products,
      });
    }
  };

  const moveCartHandler = (product) => {
    cartHandler(product);
    const products = removeProductFromList(wishlist, product);
    productDispatch({
      type: "UPDATE_WISHLIST",
      payload: products,
    });
    navigate("/cart");
  };

  const cartHandler = (product) => {
    const products = addProductToList(cart, product, page);

    productDispatch({
      type: "UPDATE_CART",
      payload: products,
    });

    const cartSummary = updateBillDetails(products);

    productDispatch({
      type: "UPDATE_BILL",
      payload: cartSummary,
    });
  };

  useEffect(() => {
    if (page === "wishlist") {
      setWishlistState(true);
    }
  }, [wishlist]);

  useEffect(() => {
    if (page === "products") {
      const productStatus = isProductExistsInList(wishlist, productDetails);
      productStatus ? setWishlistState(!wishlistState) : "";
    }
  }, []);

  return (
    <div className="card badge-card">
      <div className="img-content">
        <a
          className="heart-btn"
          onClick={() => {
            wishListHandler(productDetails);
          }}
        >
          <i
            style={{ color: wishlistState ? "#ff0000" : "#d3d3d3" }}
            className=" fas fa-heart fa-1x"
          ></i>
        </a>
        <img
          className="item-img"
          src={productDetails.image}
          alt="Card Header Image"
        />
      </div>
      <div className="card-content flex-dir-col">
        <h2 className="item-name">{productDetails.title}</h2>
        <div className="item-details flex-dir-col">
          <div className="prices flex-dir-row">
            <span className="price">
              <b>Rs. {productDetails.discountPrice}</b>
            </span>
            <span className="initial-price">
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
        </div>
      </div>
      {page === "wishlist" && (
        <button
          className="btn primary-btn move-to-cart text-decoration-none"
          onClick={() => moveCartHandler(productDetails)}
        >
          Move to cart
        </button>
      )}
      {page !== "wishlist" && isProductExistsInList(cart, productDetails) ? (
        <button
          className="btn primary-btn go-to-cart text-decoration-none"
          onClick={() => navigate("/cart")}
        >
          Go to cart
        </button>
      ) : page === "products" ? (
        <button
          className="btn primary-btn add-to-cart"
          onClick={() => cartHandler(productDetails)}
        >
          Add to cart
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export { ProductCard };
