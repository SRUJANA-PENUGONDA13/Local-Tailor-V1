import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const routePath = window.location.pathname;
  // Yet to add Authetication
  const [loginStatus, setLoginStatus] = useState("active");

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
              <div className="lt-nav-mid-sec">
                <i className="fa fa-search search-icon"></i>
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Search for product"
                />
              </div>
              <div className="lt-nav-right-sec flex-dir-row">
                <div className="badge">
                  <Link
                    className="text-decoration-none"
                    to={loginStatus === "active" ? "/wishlist" : "/signin"}
                  >
                    <i className="far fa-heart"></i>
                    <span className="circle badge-pos-top-right">
                      <p>4</p>
                    </span>
                  </Link>
                </div>
                <div className="badge">
                  <Link
                    className="text-decoration-none"
                    to={loginStatus === "active" ? "/cart" : "/signin"}
                  >
                    <i className="fas fa-shopping-cart"></i>
                    <span className="circle badge-pos-top-right">
                      <p>4</p>
                    </span>
                  </Link>
                </div>
                <Link className="text-decoration-none" to="/signin">
                  <i
                    className={
                      loginStatus === "active"
                        ? "fas fa-sign-out-alt"
                        : "far fa-user"
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
              <Link className="text-decoration-none" to="/signin">
                <i className="far fa-user" aria-hidden="true"></i>
              </Link>
            </div>
          )}
        </div>
        {(routePath === "/products" ||
          routePath === "/cart" ||
          routePath === "/wishlist") && (
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
