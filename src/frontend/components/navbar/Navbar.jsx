import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProduct, useAuth } from "../../context/index";
import "./Navbar.css";

const Navbar = () => {
  const routePath = window.location.pathname;
  const [{ wishlist, cart }, productDispatch] = useProduct();
  const { isAuthenticated, setAuthenticationStatus } = useAuth();
  const wishlistItemCount = wishlist.length;
  const cartItemCount = cart.length;

  const signoutHandler = () => {
    localStorage.removeItem("token");
    setAuthenticationStatus(false);

    productDispatch({
      type: "UPDATE_WISHLIST",
      payload: [],
    });

    productDispatch({
      type: "UPDATE_CART",
      payload: [],
    });
  };

  return (
    <React.Fragment>
      <nav className="lt-nav-container">
        <div className="lt-nav-body flex-dir-row">
          <div className="lt-nav-left-sec flex-dir-row">
            <span>
              <Link className="text-decoration-none brand-name" to="/">
                Local Tailor
              </Link>
            </span>
          </div>
          {(routePath === "/products" ||
            routePath === "/cart" ||
            routePath === "/wishlist") && (
            <>
              {routePath === "/products" && (
                <div className="lt-nav-mid-sec">
                  <i className="fa fa-search search-icon"></i>
                  <input
                    type="text"
                    className="search-bar"
                    placeholder="Search for product"
                  />
                </div>
              )}
              <div className="lt-nav-right-sec flex-dir-row">
                <Link
                  className="explore-link text-decoration-none"
                  to="/products"
                >
                  Explore
                </Link>
                <div className="badge">
                  <Link className="text-decoration-none" to="/wishlist">
                    <i className="far fa-heart"></i>
                    <span
                      className="circle badge-pos-top-right"
                      style={
                        wishlistItemCount > 9
                          ? { padding: "3px 4px" }
                          : { padding: "4px 8px" }
                      }
                    >
                      <p>
                        <b>{wishlistItemCount}</b>
                      </p>
                    </span>
                  </Link>
                </div>
                <div className="badge">
                  <Link className="text-decoration-none" to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span
                      className="circle badge-pos-top-right"
                      style={
                        cartItemCount > 9
                          ? { padding: "3px 4px" }
                          : { padding: "4px 8px" }
                      }
                    >
                      <p>{cartItemCount}</p>
                    </span>
                  </Link>
                </div>
                <Link
                  className="text-decoration-none"
                  to={isAuthenticated ? "/" : "/signin"}
                  onClick={() => (isAuthenticated ? signoutHandler() : "")}
                >
                  <i
                    className={
                      isAuthenticated ? "fas fa-sign-out-alt" : "far fa-user"
                    }
                    aria-hidden="true"
                  ></i>
                </Link>
              </div>
            </>
          )}
          {(routePath === "/" ||
            routePath === "/signup" ||
            routePath === "/signin") && (
            <div className="lt-nav-right-sec flex-dir-row">
              <Link
                className="explore-link text-decoration-none"
                to="/products"
              >
                Explore
              </Link>
              <Link
                className="text-decoration-none"
                to={isAuthenticated ? "/" : "/signin"}
              >
                <i
                  className={
                    isAuthenticated ? "fas fa-sign-out-alt" : "far fa-user"
                  }
                  aria-hidden="true"
                  onClick={() => (isAuthenticated ? signoutHandler() : "")}
                ></i>
              </Link>
            </div>
          )}
        </div>
        {routePath === "/products" && (
          <div className="lt-nav-mobile-mid-sec">
            <i className="fa fa-search search-icon"></i>
            <input
              type="text"
              className="search-bar"
              placeholder="Search for product"
            />
          </div>
        )}
      </nav>
    </React.Fragment>
  );
};

export { Navbar };
