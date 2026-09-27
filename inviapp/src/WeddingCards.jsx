
import React from "react";
import "./WeddingCards.css";
import Navbar from "./Navbar";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const weddingCards = [
  {
    image: "/weddingcard1.png",
    name: "Hindu Wedding Cards",
  },
  {
    image: "/weddingcard2.png",
    name: "Christian Wedding Cards",
  },
  {
    image: "/weddingcard3.png",
    name: "Muslim Wedding Cards",
  },
  {
    image: "/weddingcard4.png",
    name: "Sikh Wedding Cards",
  },
  {
    image: "/weddingcard5.png",
    name: "Interfaith Wedding Cards",
  },
  {
    image: "/weddingcard6.png",
    name: "Exclusive Wedding Cards",
  },
  {
    image: "/weddingcard7.png",
    name: "Traditional Wedding Cards",
  },
  {
    image: "/weddingcard8.png",
    name: "All Wedding Cards",
  },
  {
    image: "/weddingcard9.png",
    name: "New Style Wedding Cards",
  },
  {
    image: "/weddingcard10.png",
    name: "Envelope Wedding Cards",
  },
  {
    image: "/weddingcard11.png",
    name: "Elegant Faith Wedding Cards",
  },
  {
    image: "/weddingcard12.png",
    name: "Nepali Wedding Cards",
  },
];

const WeddingCards = () => {
  return (
    <>
      <Navbar />

      {/* ================= WEDDING CARDS SECTION ================= */}

      <section className="wedding-cards-page">

        {/* Heading */}

        <div className="wedding-cards-heading">

          <h1>Wedding Cards</h1>

          <p>
            Discover beautiful wedding invitations
            designed for your special moments.
          </p>

        </div>


        {/* Cards Container */}

        <div className="wedding-cards-container">

          {weddingCards.map((card, index) => (

            <div className="wedding-card-item" key={index}>

              {/* Card Image */}

              <div className="wedding-card-image">

                <img
                  src={card.image}
                  alt={card.name}
                />

              </div>


              {/* Card Name */}

              <div className="wedding-card-content">

                <h3>{card.name}</h3>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* Footer will be added here */}
      {/* ================= FOOTER SECTION ================= */}
      
      <footer className="website-footer">
      
        {/* ================= FOOTER MAIN ================= */}
      
        <div className="footer-main">
      
      
          {/* ================= BRAND SECTION ================= */}
      
          <div className="footer-brand">
      
            <img
              src="/logos.png"
              alt="Wedding Knot Craft Logo"
              className="footer-logo"
            />
      
            <p className="footer-tagline">
              Largest Wedding Cards Collections in Chennai
            </p>
      
      
            {/* Social Media */}
      
            <div className="footer-social">
      
              <span>Follow us with</span>
      
              <a href="#" aria-label="Instagram">
                <FaInstagram style={{ color: '#E1306C' }} size={40} />
              </a>
      
              <a href="#" aria-label="Facebook">
                <FaFacebook color="#1877F2" size={40}/>
              </a>
      
              <a href="#" aria-label="YouTube">
                <FaYoutube color="#FF0000" size={40}/>
              </a>
      
              <a href="#" aria-label="WhatsApp">
                <FaWhatsapp color="#25D366" size={40} />
              </a>
      
            </div>
      
          </div>
      
      
          {/* ================= INFORMATION ================= */}
      
          <div className="footer-column">
      
            <h3>Information</h3>
      
            <a href="#">About Us</a>
      
            <a href="#">Contact Us</a>
      
            <a href="#">FAQ</a>
      
            <a href="#">
              How to order wedding invitation online?
            </a>
      
          </div>
      
      
          {/* ================= QUICK ACCESS ================= */}
      
          <div className="footer-column">
      
            <h3>Quick Access</h3>
      
            <a href="#">Home</a>
      
            <a href="#">Wedding Cards</a>
      
            <a href="#">Hindu Wedding Cards</a>
      
          </div>
      
      
          {/* ================= CONTACT US ================= */}
      
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
              <span>
                Operating hours: 10.00Am to 10.00Pm
              </span>
            </p>
      
      
            <p className="footer-working-days">
              Monday - Sunday
            </p>
      
          </div>
      
      
        </div>
      
      
        {/* ================= COPYRIGHT ================= */}
      
        <div className="footer-bottom">
      
          <p>
            © Wed knot craft India Private Limited. All Rights Reserved.
          </p>
      
        </div>
      
      </footer>
      
      

    </>
  );
};

export default WeddingCards;