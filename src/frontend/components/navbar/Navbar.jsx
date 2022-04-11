import React, { useEffect, useState } from "react";
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
              <a className="text-decoration-none brand-name" href="/">
                Local Tailor
              </a>
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
                  <a
                    className="text-decoration-none"
                    href={loginStatus === "active" ? "/wishlist" : "/signin"}
                  >
                    <i className="far fa-heart"></i>
                    <span className="circle badge-pos-top-right">
                      <p>4</p>
                    </span>
                  </a>
                </div>
                <div className="badge">
                  <a
                    className="text-decoration-none"
                    href={loginStatus === "active" ? "/cart" : "/signin"}
                  >
                    <i className="fas fa-shopping-cart"></i>
                    <span className="circle badge-pos-top-right">
                      <p>4</p>
                    </span>
                  </a>
                </div>
                <a className="text-decoration-none" href="/signin">
                  <i
                    className={
                      loginStatus === "active"
                        ? "fas fa-sign-out-alt"
                        : "far fa-user"
                    }
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </>
          )}
          {(routePath === "/" ||
            routePath === "/signup" ||
            routePath === "/signin") && (
            <div className="lt-nav-right-sec flex-dir-row">
              <a className="explore-link text-decoration-none" href="/products">
                Explore
              </a>
              <a className="text-decoration-none" href="/signin">
                <i className="far fa-user" aria-hidden="true"></i>
              </a>
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
