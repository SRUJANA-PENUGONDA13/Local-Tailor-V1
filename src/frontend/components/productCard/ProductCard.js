import "./ProductCard.css";
import { useState, useEffect } from "react";
import { useProduct, useAuth } from "../../context/index";
import { useNavigate } from "react-router-dom";
import { updateBillDetails, updateQuantity } from "../../utils/cartBill";
import {
  addProductToList,
  removeProductFromList,
  isProductExistsInList,
} from "../../utils/generic/index";

const ProductCard = ({ productDetails, page }) => {
  const [wishlistState, setWishlistState] = useState(false);
  const [{ wishlist, cart }, productDispatch] = useProduct();
  const { isAuthenticated, setAuthenticationStatus } = useAuth();
  const navigate = useNavigate();

  const wishListHandler = async (product) => {
    setWishlistState(!wishlistState);

    if (wishlistState === true) {
      const products = await removeProductFromList(
        wishlist,
        product,
        "wishlist"
      );

      productDispatch({
        type: "UPDATE_WISHLIST",
        payload: products,
      });
    } else {
      const products = await addProductToList(wishlist, product, "wishlist");

      productDispatch({
        type: "UPDATE_WISHLIST",
        payload: products,
      });
    }
  };

  const moveCartHandler = async (product) => {
    if (isProductExistsInList(cart, product)) {
      const products = await updateQuantity(product._id, "increment");

      productDispatch({
        type: "UPDATE_CART",
        payload: products,
      });
    } else {
      cartHandler(product);
    }

    const products = await removeProductFromList(wishlist, product, "wishlist");

    productDispatch({
      type: "UPDATE_WISHLIST",
      payload: products,
    });

    navigate("/cart");
  };

  const cartHandler = async (product) => {
    const products = await addProductToList(cart, product, "cart");

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
            isAuthenticated
              ? wishListHandler(productDetails)
              : navigate("/signin");
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
          onClick={() =>
            isAuthenticated ? cartHandler(productDetails) : navigate("/signin")
          }
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
