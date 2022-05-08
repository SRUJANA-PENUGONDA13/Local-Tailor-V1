import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signinService } from "../../services/signinService";
import { useAuth } from "../../context/index";
import "./Signin.css";

const Signin = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const { isAuthenticated, setAuthenticationStatus } = useAuth();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const signinHandler = async (loginDetails) => {
    const { foundUser, encodedToken } = await signinService(loginDetails);

    setError(!encodedToken);

    if (!!encodedToken) {
      setAuthenticationStatus(true);
      localStorage.setItem("token", encodedToken);
      navigate("/");
    }
  };

  return (
    <React.Fragment>
      <main className="main-container flex-center-box flex-dir-col">
        <div className="centered-box flex-dir-col">
          <div className="box-header">
            <h1>Login</h1>
          </div>
          <form
            className="box-body flex-dir-col"
            onSubmit={(event) => {
              event.preventDefault();
              signinHandler(loginDetails);
            }}
          >
            <div className="field">
              <label for="email">Email address</label>
              <input
                className="input-field"
                type="text"
                id="email"
                placeholder="srujana@outlook.com"
                value={loginDetails.email}
                onChange={(e) =>
                  setLoginDetails({ ...loginDetails, email: e.target.value })
                }
                required
              />
            </div>
            <div className="field">
              <label for="password">Password</label>
              <input
                className="input-field"
                type="password"
                id="password"
                placeholder="*************"
                value={loginDetails.password}
                onChange={(e) =>
                  setLoginDetails({ ...loginDetails, password: e.target.value })
                }
                required
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
            <button
              role="button"
              type="submit"
              className="btn link-btn primary-btn"
              to="/products"
            >
              Login
            </button>
            <button
              role="button"
              type="submit"
              className="btn link-btn primary-btn"
              to="/products"
              onClick={() =>
                setLoginDetails({
                  email: "adarshbalika@gmail.com",
                  password: "adarshbalika",
                })
              }
            >
              Login As Guest
            </button>
            <Link
              role="button"
              className="account-link text-decoration-none field"
              to="/signup"
            >
              Create New Account
            </Link>
            {error && <p className="error">Please check your credentials</p>}
          </form>
        </div>
      </main>
    </React.Fragment>
  );
};

export { Signin };
