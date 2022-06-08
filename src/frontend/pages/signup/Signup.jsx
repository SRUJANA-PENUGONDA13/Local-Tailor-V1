import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupService } from "../../services/signupService";
import "./Signup.css";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordIcon, setPasswordIcon] = useState(false);
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(false);

  const navigate = useNavigate();

  const signUpHandler = async (user) => {
    const encodedToken = await signupService(user);
    if (!!encodedToken) {
      localStorage.setItem("token", encodedToken);
    }
    navigate("/");
  };

  return (
    <React.Fragment>
      <main className="main-container flex-center-box flex-dir-col">
        <div className="centered-box flex-dir-col">
          <div className="box-header">
            <h1>Signup</h1>
          </div>
          <form
            className="box-body flex-dir-col"
            onSubmit={(event) => {
              event.preventDefault();
              signUpHandler(user);
            }}
          >
            <div className="field">
              <label for="name">Name</label>
              <input
                className="input-field"
                type="text"
                id="name"
                placeholder="Srujana Penugonda"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                required
              />
            </div>
            <div className="field">
              <label for="email">Email address</label>
              <input
                className="input-field"
                type="text"
                id="email"
                placeholder="srujana@outlook.com"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
            </div>
            <div className="field">
              <label for="password">Password</label>
              <div className="password-sec flex-dir-row">
                <input
                  className="password-field"
                  type={passwordIcon ? "" : "password"}
                  id="password"
                  placeholder="*************"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  required
                />
                {passwordIcon ? (
                  <i
                    class="fa-regular fa-eye password-icon"
                    onClick={() => setPasswordIcon(!passwordIcon)}
                  ></i>
                ) : (
                  <i
                    class="fa-regular fa-eye-slash password-icon"
                    onClick={() => setPasswordIcon(!passwordIcon)}
                  ></i>
                )}
              </div>
            </div>
            <div className="field">
              <label for="password">Confirm Password</label>
              <div className="password-sec flex-dir-row">
                <input
                  className="password-field"
                  type={confirmPasswordIcon ? "" : "password"}
                  id="password"
                  placeholder="*************"
                  onChange={(e) =>
                    setUser({ ...user, confirmPassword: e.target.value })
                  }
                  required
                />
                {confirmPasswordIcon ? (
                  <i
                    class="fa-regular fa-eye password-icon"
                    onClick={() => setConfirmPasswordIcon(!confirmPasswordIcon)}
                  ></i>
                ) : (
                  <i
                    class="fa-regular fa-eye-slash password-icon"
                    onClick={() => setConfirmPasswordIcon(!confirmPasswordIcon)}
                  ></i>
                )}
              </div>
            </div>
            <div className="field">
              <input
                type="checkbox"
                value="lsRememberMe"
                id="rememberMe"
                required
              />
              <label id="aggrement" for="rememberMe">
                I accept of Terms & Conditions
              </label>
            </div>
            <button
              type="submit"
              className="btn link-btn primary-btn"
              disabled={user.password !== user.confirmPassword}
            >
              Create New Account
            </button>
            <Link
              role="button"
              className="account-link text-decoration-none field"
              to="/signin"
            >
              Already have an account
            </Link>
            {user.password !== user.confirmPassword && (
              <p className="error">
                password and confirm password are not same
              </p>
            )}
          </form>
        </div>
      </main>
    </React.Fragment>
  );
};

export { Signup };
