import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <React.Fragment>
      <main className="main-container flex-center-box flex-dir-col">
        <div className="centered-box flex-dir-col">
          <div className="box-header">
            <h1>Signup</h1>
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
              <label for="password">Confirm Password</label>
              <input
                className="input-field"
                type="password"
                id="password"
                placeholder="*************"
              />
            </div>
            <div className="field">
              <input type="checkbox" value="lsRememberMe" id="rememberMe" />
              <label id="aggrement" for="rememberMe">
                I accept of Terms & Conditions
              </label>
            </div>
            <Link
              role="button"
              className="btn link-btn primary-btn"
              to="/signin"
            >
              Create New Account
            </Link>
            <Link
              role="button"
              className="account-link text-decoration-none field"
              to="/signin"
            >
              Already have an account
            </Link>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export { Signup };
