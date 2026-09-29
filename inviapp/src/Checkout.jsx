import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const totalAmount = cartItems.reduce((total, item) => {
    const price = Number(String(item.price).replace(/[^\d.]/g, "")) || 0;
    return total + price * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <section className="checkout-empty">
        <h2>Your cart is empty</h2>
        <p>Please add a wedding invitation before proceeding to checkout.</p>

        <Link to="/wedding-cards" className="checkout-back-btn">
          Browse Wedding Cards
        </Link>
      </section>
    );
  }

  return (
    <section className="checkout-section">
      <div className="checkout-container">

        {/* Page Heading */}
        <div className="checkout-heading">
          <h1>Checkout</h1>
          <p>Complete your order and make your invitation story memorable.</p>
        </div>

        <div className="checkout-content">

          {/* Customer Details */}
          <div className="customer-details">

            <h2>Customer Details</h2>

            <div className="checkout-form">

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label>Delivery Address</label>
                <textarea
                  placeholder="Enter your delivery address"
                  rows="4"
                ></textarea>
              </div>

              <div className="checkout-two-column">

                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    placeholder="City"
                  />
                </div>

                <div className="form-group">
                  <label>PIN Code</label>
                  <input
                    type="text"
                    placeholder="PIN Code"
                  />
                </div>

              </div>

            </div>
          </div>

          {/* Order Summary */}
          <div className="order-summary">

            <h2>Order Summary</h2>

            <div className="checkout-products">

              {cartItems.map((item) => (
                <div
                  className="checkout-product"
                  key={item.image}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="checkout-product-info">

                    <h3>{item.name}</h3>

                    <p>
                      Quantity: {item.quantity}
                    </p>

                    <strong>
                      ₹{Number(String(item.price).replace(/[^\d.]/g, "") || 0).toFixed(2)}
                    </strong>

                  </div>
                </div>
              ))}

            </div>

            <div className="summary-line">
              <span>Subtotal</span>
              <span>
                ₹{totalAmount.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="summary-line">
              <span>Delivery</span>
              <span>Free</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>
                ₹{totalAmount.toLocaleString("en-IN")}
              </strong>
            </div>

            <button
              className="continue-payment-btn"
              onClick={() => navigate("/payment")}
            >
              Continue to Payment
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Checkout;