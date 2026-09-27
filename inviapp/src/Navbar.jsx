
import React, { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaChevronDown,
} from "react-icons/fa";
import ProfileAuthModal from "./ProfileAuthModal";
import { useWishlist } from "./WishlistContext";
import WishlistModal from "./WishlistModal";
import { useCart } from "./CartContext";
import CartModal from "./CartModal";

import "./Navbar.css";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const [searchText, setSearchText] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { wishlistItems } = useWishlist();

const [showWishlist, setShowWishlist] = useState(false);

  const navigate = useNavigate();
  const { cartItems } = useCart();

const [showCart, setShowCart] = useState(false);

  const handleSearch = () => {
    if (searchText.trim() === "") {
      alert("Please enter something to search");
      return;
    }

    alert(`Searching for: ${searchText}`);
  };

  const handleDropdown = (menuName) => {
    setActiveDropdown(
      activeDropdown === menuName ? null : menuName
    );
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="navbar">

      {/* Top Section */}
      <div className="navbar-top">

        {/* Logo */}
        <div className="logo-container">
          <img
            src="/logos.png"
            alt="Cherish By Wed Knot Craft"
            className="logo-image"
          />
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="search-button"
            onClick={handleSearch}
            aria-label="Search"
          >
            <FaSearch />
          </button>
        </div>

        {/* Action Icons */}
        <div className="navbar-actions">

          {/* Login */}
          <button onClick={() => setShowAuthModal(true)}>
  <FaUser />
</button>

          {/* Wishlist */}
          <button
  className="action-button wishlist-icon-button"
  aria-label="Wishlist"
  onClick={() => setShowWishlist(true)}
>
  <FaHeart />

  {wishlistItems.length > 0 && (
    <span className="wishlist-count">
      {wishlistItems.length}
    </span>
  )}
</button>

          {/* Shopping Cart */}
          <button
  className="action-button cart-icon-button"
  aria-label="Shopping cart"
  onClick={() => setShowCart(true)}
>
  <FaShoppingCart />

  {cartItems.length > 0 && (
    <span className="cart-count">
      {cartItems.length}
    </span>
  )}
</button>

        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="navigation-menu">

        {/* Home */}
        <Link
          to="/"
          className="active"
          onClick={closeDropdown}
        >
          Home
        </Link>

        {/* Wedding Invitations Dropdown */}
        <div className="navbar-dropdown">
          <button
  className="navbar-dropdown-btn"
  onClick={() => {
    navigate("/wedding-cards");
    handleDropdown("wedding");
  }}
>
  Wedding Invitations
</button>

          {activeDropdown === "wedding" && (
            <div className="dropdown-menu">

              <button
                onClick={() => {
                  navigate("/wedding-cards");
                  closeDropdown();
                }}
              >
                All Wedding Cards
              </button>

              <button onClick={closeDropdown}>
                Hindu Wedding Cards
              </button>

              <button onClick={closeDropdown}>
                Christian Wedding Cards
              </button>

              <button onClick={closeDropdown}>
                Muslim Wedding Cards
              </button>

              <button onClick={closeDropdown}>
                Interfaith Wedding Cards
              </button>

            </div>
          )}
        </div>

        {/* Special Occasions Dropdown */}
        <div className="navbar-dropdown">

          <button
            className="navbar-dropdown-btn"
            onClick={() => handleDropdown("special")}
          >
            Special Occasions
            <FaChevronDown />
          </button>

          {activeDropdown === "special" && (
            <div className="dropdown-menu">

              <button onClick={closeDropdown}>
                Birthday Invitations
              </button>

              <button onClick={closeDropdown}>
                Anniversary Invitations
              </button>

              <button onClick={closeDropdown}>
                Engagement Invitations
              </button>

              <button onClick={closeDropdown}>
                Baby Shower Invitations
              </button>

              <button onClick={closeDropdown}>
                Housewarming Invitations
              </button>

            </div>
          )}
        </div>

        {/* Theme Cards Dropdown */}
        <div className="navbar-dropdown">

          <button
            className="navbar-dropdown-btn"
            onClick={() => handleDropdown("themes")}
          >
            Theme Cards
            <FaChevronDown />
          </button>

          {activeDropdown === "themes" && (
            <div className="dropdown-menu">

              <button onClick={closeDropdown}>
                Floral Theme
              </button>

              <button onClick={closeDropdown}>
                Beach Theme
              </button>

              <button onClick={closeDropdown}>
                Birds Theme
              </button>

              <button onClick={closeDropdown}>
                Palace Theme
              </button>

              <button onClick={closeDropdown}>
                Nature Theme
              </button>

            </div>
          )}
        </div>

        {/* Scroll Invitation Dropdown */}
        <div className="navbar-dropdown">

          <button
            className="navbar-dropdown-btn"
            onClick={() => handleDropdown("scroll")}
          >
            Scroll Invitation
            <FaChevronDown />
          </button>

          {activeDropdown === "scroll" && (
            <div className="dropdown-menu">

              <button onClick={closeDropdown}>
                Traditional Scroll
              </button>

              <button onClick={closeDropdown}>
                Royal Scroll
              </button>

              <button onClick={closeDropdown}>
                Floral Scroll
              </button>

              <button onClick={closeDropdown}>
                Luxury Scroll
              </button>

            </div>
          )}
        </div>

        {/* Digital Invitation Dropdown */}
        <div className="navbar-dropdown">

          <button
            className="navbar-dropdown-btn"
            onClick={() => handleDropdown("digital")}
          >
            Digital Invitation
            <FaChevronDown />
          </button>

          {activeDropdown === "digital" && (
            <div className="dropdown-menu">

              <button onClick={closeDropdown}>
                Wedding Digital Invitation
              </button>

              <button onClick={closeDropdown}>
                Birthday Digital Invitation
              </button>

              <button onClick={closeDropdown}>
                Engagement Digital Invitation
              </button>

              <button onClick={closeDropdown}>
                Animated Invitation
              </button>

            </div>
          )}
        </div>
        {showAuthModal && (
  <ProfileAuthModal
    onClose={() => setShowAuthModal(false)}
  />
)}
{showWishlist && (
  <WishlistModal
    onClose={() => setShowWishlist(false)}
  />
)}
{showCart && (
  <CartModal
    onClose={() => setShowCart(false)}
  />
)}
{showCart && (
  <CartModal
    onClose={() => setShowCart(false)}
  />
)}

      </nav>
    </header>
  );
}

export default Navbar;