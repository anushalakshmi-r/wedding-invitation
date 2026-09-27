import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import "./Hero.css";

function Footer() {
  return (
    <footer className="website-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img
            src="/logos.png"
            alt="Wedding Knot Craft Logo"
            className="footer-logo"
          />

          <p className="footer-tagline">
            Largest Wedding Cards Collections in Chennai
          </p>

          <div className="footer-social">
            <span>Follow us with</span>

            <a href="#" aria-label="Instagram">
              <FaInstagram style={{ color: "#E1306C" }} size={40} />
            </a>

            <a href="#" aria-label="Facebook">
              <FaFacebook color="#1877F2" size={40} />
            </a>

            <a href="#" aria-label="YouTube">
              <FaYoutube color="#FF0000" size={40} />
            </a>

            <a href="#" aria-label="WhatsApp">
              <FaWhatsapp color="#25D366" size={40} />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Information</h3>

          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/how-to-order">How to Order Wedding Invitation Online</Link>
        </div>

        <div className="footer-column">
          <h3>Quick Access</h3>

          <Link to="/">
  Home
</Link>
<Link to="/wedding-cards">
  Wedding Invitations
</Link>
<Link to="/hindu-collection">
  Hindu Wedding Collections
</Link>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <p>
            <FaPhoneAlt />
            <span>+91 9876543210</span>
          </p>

          <p>
            <FaEnvelope />
            <span>wedtype@weddingcards.com</span>
          </p>

          <p>
            <FaClock />
            <span>Operating hours: 10.00Am to 10.00Pm</span>
          </p>

          <p className="footer-working-days">Monday - Sunday</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Wed knot craft India Private Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

