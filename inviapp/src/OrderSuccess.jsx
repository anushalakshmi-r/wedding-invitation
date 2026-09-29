import React from "react";
import { Link } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  return (
    <section className="order-success">

      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>
          Order Placed Successfully!
        </h1>

        <p>
          Thank you for choosing Cherish By
          Wed Knot Craft.
        </p>

        <p>
          Your wedding invitation order has
          been successfully placed.
        </p>

        <div className="order-number">
          Order ID: #CHW123456
        </div>

        <Link
          to="/"
          className="continue-shopping"
        >
          Continue Shopping
        </Link>

      </div>

    </section>
  );
}

export default OrderSuccess;