import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  return (
    <React.Fragment>
      <main className="main-container flex-center-box flex-dir-col">
        <div className="centered-box flex-dir-col">
          <div className="box-header">
            <h1>Login</h1>
          </div>
          <div className="box-body flex-dir-col">
            <div className="field">
              <label for="email">Email address</label>
              <input
                className="input-field"
                type="text"
                id="email"
                placeholder="srujana@outlook.com"
              />
            </div>
            <div className="field">
              <label for="password">Password</label>
              <input
                className="input-field"
                type="password"
                id="password"
                placeholder="*************"
              />
            </div>
            <div className="field">
              <input type="checkbox" value="lsRememberMe" id="rememberMe" />
              <label className="rememberMe" for="rememberMe">
                Remember me
              </label>
              <Link
                to="#"
                className="forgot-password-link text-decoration-none"
              >
                Forgot your Password?
              </Link>
            </div>
            <Link
              role="button"
              className="btn link-btn primary-btn"
              to="/products"
            >
              Login
            </Link>
            <Link
              role="button"
              className="account-link text-decoration-none field"
              to="/signup"
            >
              Create New Account
            </Link>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export { Signin };
