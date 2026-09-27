
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./ProfileAuthModal.css";

function ProfileAuthModal({ onClose }) {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div
        className="auth-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="auth-modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        {/* Login and Sign Up Tabs */}
        <div className="auth-modal-tabs">
          <button
            className={activeTab === "login" ? "active-tab" : ""}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>

          <button
            className={activeTab === "signup" ? "active-tab" : ""}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        {activeTab === "login" && (
          <div className="auth-modal-content">
            <h2>Login to my Account</h2>

            <form>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                required
              />

              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                required
              />

              <button type="submit" className="auth-submit-btn">
                Login & Continue
              </button>
            </form>

            <button className="forgot-password-btn">
              Forgot Password
            </button>

            <p className="auth-bottom-text">
              New user?{" "}
              <span onClick={() => setActiveTab("signup")}>
                Sign Up
              </span>
            </p>
          </div>
        )}

        {/* Sign Up Form */}
        {activeTab === "signup" && (
          <div className="auth-modal-content">
            <h2>New User? Sign Up Now</h2>

            <form>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                required
              />

              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                required
              />

              <label>Re-Password</label>
              <input
                type="password"
                placeholder="Re-enter Password"
                required
              />

              <button type="submit" className="auth-submit-btn">
                Sign Up & Continue
              </button>
            </form>

            <p className="auth-bottom-text">
              Already have an account?{" "}
              <span onClick={() => setActiveTab("login")}>
                Login
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileAuthModal;