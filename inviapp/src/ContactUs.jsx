
import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import "./ContactUs.css";
import "./Hero.css";

function ContactUs() {
  return (
    <div className="contact-page">

      {/* Navbar */}
      <Navbar />

      {/* Contact Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>

        <p>
          We are here to help you create beautiful invitations
          for your special moments.
        </p>

        <p>
          Reach out to us for any questions, support, or assistance
          with your invitation journey.
        </p>
      </section>

      {/* Customer Support Section */}
      <section className="contact-info-section">

        <div className="contact-info-content">
          <h2>Customer Support</h2>

          <p>
            Our customer support team is always ready to assist you
            with your queries and provide the guidance you need.
          </p>

          <p>
            Whether you need help choosing a design, placing an order,
            or understanding our services, we are happy to help.
          </p>

          <div className="contact-details">
            <p>
              <strong>Email:</strong> support@cherishwedknotcraft.com
            </p>

            <p>
              <strong>Working Hours:</strong> Monday - Saturday,
              9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

      </section>

      {/* Proofing Department Section */}
      <section className="contact-info-section contact-light-section">

        <div className="contact-info-content">
          <h2>Proofing Department</h2>

          <p>
            Our proofing department carefully reviews your invitation
            details to help ensure that your design matches your
            expectations.
          </p>

          <p>
            We assist with checking names, dates, locations, and
            other important information before the invitation is finalized.
          </p>

          <div className="contact-details">
            <p>
              <strong>Email:</strong> proofing@cherishwedknotcraft.com
            </p>

            <p>
              <strong>Support:</strong> Design and content verification
            </p>
          </div>
        </div>

      </section>

      {/* Contact Details Section */}
      <section className="contact-info-section">

        <div className="contact-info-content">
          <h2>Contact Us</h2>

          <p>
            Have a question or need more information about our
            invitation collections? You can reach us through the
            contact details below.
          </p>

          <div className="contact-details">

            <p>
              <strong>Phone:</strong> +91 98765 43210
            </p>

            <p>
              <strong>Email:</strong> hello@cherishwedknotcraft.com
            </p>

            <p>
              <strong>Address:</strong> Chennai, Tamil Nadu, India
            </p>

            <p>
              <strong>Working Hours:</strong> Monday - Saturday,
              9:00 AM - 6:00 PM
            </p>

          </div>
        </div>

      </section>

      {/* Online Invitation Story Section */}
      <section className="online-invitation-section">

        <div className="online-invitation-content">

          <h2>Share Your Online Invitation Story Worldwide</h2>

          <p>
            Celebrate your special moments with our beautiful online
            invitations. Share your wedding story, event details,
            and memorable moments with your loved ones.
          </p>

          <p>
            Our online invitation designs make it easy to connect
            with friends and family across the world. No matter where
            your loved ones are, your celebration can reach them.
          </p>

          <p>
            From local celebrations to worldwide connections,
            we help you share your invitation story with love
            and creativity.
          </p>

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default ContactUs;