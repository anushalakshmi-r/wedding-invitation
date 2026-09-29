import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import "./Payment.css";

function Payment() {
  const navigate = useNavigate();
  const {
  cartItems,
  clearCart
} = useCart();

  const [paymentMethod, setPaymentMethod] =
    useState("upi");

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total +
      Number(item.price) * Number(item.quantity),
    0
  );

  const handlePayment = () => {
    clearCart();
    navigate("/order-success", { replace: true });
  };

  return (
    <section className="payment-section">

      <div className="payment-container">

        <h1>Payment</h1>

        <p className="payment-subtitle">
          Choose your preferred payment method
        </p>

        {/* Payment Methods */}

        <div className="payment-methods">

          <label>
            <input
              type="radio"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />

            UPI
          </label>

          <label>
            <input
              type="radio"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />

            Credit / Debit Card
          </label>

          <label>
            <input
              type="radio"
              value="netbanking"
              checked={
                paymentMethod === "netbanking"
              }
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />

            Net Banking
          </label>

          <label>
            <input
              type="radio"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            />

            Cash on Delivery
          </label>

        </div>

        {/* UPI */}

        {paymentMethod === "upi" && (
          <div className="payment-box">

            <h3>UPI Payment</h3>

            <input
              type="text"
              placeholder="Enter UPI ID"
            />

          </div>
        )}

        {/* Card */}

        {paymentMethod === "card" && (
          <div className="payment-box">

            <h3>Card Payment</h3>

            <input
              type="text"
              placeholder="Card Number"
            />

            <input
              type="text"
              placeholder="Card Holder Name"
            />

            <div className="card-row">

              <input
                type="text"
                placeholder="MM/YY"
              />

              <input
                type="password"
                placeholder="CVV"
              />

            </div>

          </div>
        )}

        {/* Net Banking */}

        {paymentMethod === "netbanking" && (
          <div className="payment-box">

            <h3>Net Banking</h3>

            <select>
              <option>Select Your Bank</option>
              <option>SBI</option>
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>Axis Bank</option>
            </select>

          </div>
        )}

        {/* COD */}

        {paymentMethod === "cod" && (
          <div className="payment-box">

            <h3>Cash on Delivery</h3>

            <p>
              Pay when your wedding invitation
              order is delivered.
            </p>

          </div>
        )}

        {/* Total */}

        <div className="payment-total">

          <span>Total Amount</span>

          <strong>
            ₹{totalAmount.toLocaleString("en-IN")}
          </strong>

        </div>

        <button
          type="button"
          className="pay-now-btn"
          onClick={handlePayment}
        >
          {paymentMethod === "cod"
            ? "Place Order"
            : "Pay Now"}
        </button>

      </div>

    </section>
  );
}

export default Payment;