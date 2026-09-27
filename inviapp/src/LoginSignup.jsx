
import React from "react";
import { Link } from "react-router-dom";
import "./LoginSignup.css";

const LoginSignup = ({ mode = "login" }) => {

  const isLogin = mode === "login";

  return (
    <section className="auth-page">

      <div className="auth-container">

        {isLogin ? (

          /* ================= LOGIN PAGE ================= */

          <div className="auth-card login-card">

            <h2>Login to My Account</h2>

            <form>

              {/* Email */}

              <div className="auth-input-group">

                <label htmlFor="login-email">
                  Email
                </label>

                <input
                  type="email"
                  id="login-email"
                  placeholder="Enter your email"
                  required
                />

              </div>


              {/* Password */}

              <div className="auth-input-group">

                <label htmlFor="login-password">
                  Password
                </label>

                <input
                  type="password"
                  id="login-password"
                  placeholder="Enter your password"
                  required
                />

              </div>


              {/* Login Button */}

              <button
                type="submit"
                className="auth-submit-btn"
              >
                Login
              </button>


              {/* Continue Button */}

              <button
                type="button"
                className="auth-continue-btn"
              >
                Continue
              </button>


              {/* Forgot Password */}

              <button
                type="button"
                className="forgot-password-btn"
              >
                Forgot Password?
              </button>

            </form>


            {/* Navigate to Signup */}

            <p className="auth-switch-text">

              New user?

              <Link to="/signup">
                Sign Up Now
              </Link>

            </p>

          </div>

        ) : (

          /* ================= SIGNUP PAGE ================= */

          <div className="auth-card signup-card">

            <h2>New User? Sign Up Now</h2>

            <form>

              {/* Email */}

              <div className="auth-input-group">

                <label htmlFor="signup-email">
                  Email
                </label>

                <input
                  type="email"
                  id="signup-email"
                  placeholder="Enter your email"
                  required
                />

              </div>


              {/* Password */}

              <div className="auth-input-group">

                <label htmlFor="signup-password">
                  Password
                </label>

                <input
                  type="password"
                  id="signup-password"
                  placeholder="Create a password"
                  required
                />

              </div>


              {/* Re-Password */}

              <div className="auth-input-group">

                <label htmlFor="signup-repassword">
                  Re-Password
                </label>

                <input
                  type="password"
                  id="signup-repassword"
                  placeholder="Re-enter your password"
                  required
                />

              </div>


              {/* Signup Button */}

              <button
                type="submit"
                className="auth-submit-btn"
              >
                Sign Up
              </button>


              {/* Continue Button */}

              <button
                type="button"
                className="auth-continue-btn"
              >
                Continue
              </button>

            </form>


            {/* Navigate to Login */}

            <p className="auth-switch-text">

              Already have an account?

              <Link to="/login">
                Login Now
              </Link>

            </p>

          </div>

        )}

      </div>

    </section>
  );
};

export default LoginSignup;