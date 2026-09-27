
import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import "./HowToOrder.css";
import "./Hero.css";

function HowToOrder() {
  const orderSteps = [
    {
      number: "01",
      title: "Browse the Collection",
      description:
        "Explore our beautiful collection of wedding invitations. Discover different styles, themes, colors, and designs to find an invitation that matches your celebration."
    },
    {
      number: "02",
      title: "Select a Design",
      description:
        "Choose your favorite invitation design from our collection. Select a style that reflects your personality, wedding theme, and special occasion."
    },
    {
      number: "03",
      title: "Add to Cart",
      description:
        "Once you have selected your preferred design, add it to your shopping cart. Review your selected invitation and continue with the ordering process."
    },
    {
      number: "04",
      title: "Review Your Order",
      description:
        "Carefully review your selected design, quantity, customization details, and other order information to make sure everything is correct before payment."
    },
    {
      number: "05",
      title: "Secure Payment",
      description:
        "Proceed with the available secure payment options. Follow the payment instructions and complete the transaction using your preferred payment method."
    },
    {
      number: "06",
      title: "Place Your Order",
      description:
        "Confirm your order after reviewing all the details. Once your order is placed, our team can begin processing your invitation according to the selected service."
    }
  ];

  return (
    <div className="how-to-order-page">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="order-hero">
        <h1>How to Order Wedding Invitations Online</h1>

        <p>
          Ordering your perfect wedding invitation is simple and convenient.
          Follow these easy steps to begin your invitation journey with us.
        </p>
      </section>

      {/* Order Steps Section */}
      <section className="order-steps-section">

        <div className="order-steps-container">

          {orderSteps.map((step, index) => (
            <div
              className="order-step-card"
              key={index}
            >

              {/* Step Number */}
              <div className="order-step-number">
                {step.number}
              </div>

              {/* Step Content */}
              <div className="order-step-content">

                <h2>{step.title}</h2>

                <p>{step.description}</p>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Final Section */}
      <section className="order-final-section">

        <h2>Start Creating Your Perfect Invitation</h2>

        <p>
          Follow these simple steps and find a beautiful invitation
          that makes your special celebration even more memorable.
        </p>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default HowToOrder;