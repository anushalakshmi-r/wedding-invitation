
import React from "react";
import { FaTimes, FaTrash } from "react-icons/fa";
import { useWishlist } from "./WishlistContext";
import "./WishlistModal.css";

function WishlistModal({ onClose }) {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div className="wishlist-overlay" onClick={onClose}>
      <div
        className="wishlist-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="wishlist-header">
          <h2>My Wishlist ❤️</h2>

          <button
            className="wishlist-close-btn"
            onClick={onClose}
            aria-label="Close wishlist"
          >
            <FaTimes />
          </button>
        </div>

        {/* Wishlist Content */}
        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist">
            <FaHeart />
            <h3>Your wishlist is empty</h3>
            <p>Add your favourite wedding cards here.</p>
          </div>
        ) : (
          <div className="wishlist-items">
            {wishlistItems.map((item) => (
              <div className="wishlist-item" key={item.image}>
                <img src={item.image} alt={item.name} />

                <div className="wishlist-item-details">
                  <h3>{item.name}</h3>
                  <p>₹{Number(String(item.price).replace(/[^\d.]/g, "") || 0).toFixed(2)}</p>

                  <button
                    className="wishlist-remove-btn"
                    onClick={() => removeFromWishlist(item.image)}
                  >
                    <FaTrash /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default WishlistModal;