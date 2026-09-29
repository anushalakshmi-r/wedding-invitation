
import React from "react";
import {
  FaTimes,
  FaTrash,
  FaPlus,
  FaMinus,
  FaShoppingCart,
} from "react-icons/fa";
import { useCart } from "./CartContext";
import "./CartModal.css";
import { useNavigate } from "react-router-dom";

function CartModal({ onClose }) {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce((total, item) => {
    const price = Number(String(item.price).replace(/[^\d.]/g, "")) || 0;
    return total + price * item.quantity;
  }, 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div
        className="cart-panel"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Cart Header */}
        <div className="cart-header">
          <h2>My Cart 🛒</h2>

          <button
            className="cart-close-btn"
            onClick={onClose}
            aria-label="Close cart"
          >
            <FaTimes />
          </button>
        </div>

        {/* Cart Content */}
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <FaShoppingCart />
            <h3>Your cart is empty</h3>
            <p>Add your favourite wedding cards to your cart.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.image}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="cart-item-price">
                      ₹{Number(String(item.price).replace(/[^\d.]/g, "") || 0).toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="quantity-controls">
                      <button
                        onClick={() => decreaseQuantity(item.image)}
                        aria-label="Decrease quantity"
                      >
                        <FaMinus />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.image)}
                        aria-label="Increase quantity"
                      >
                        <FaPlus />
                      </button>
                    </div>

                    <button
                      className="cart-remove-btn"
                      onClick={() => removeFromCart(item.image)}
                    >
                      <FaTrash /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="cart-summary">
              <div className="cart-total-row">
                <span>Total Amount</span>
                <strong>₹{totalAmount.toLocaleString("en-IN")}</strong>
              </div>

              <button
  className="checkout-btn"
  onClick={() => {
    onClose();
    navigate("/checkout");
  }}
>
  Proceed to Checkout
</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartModal;