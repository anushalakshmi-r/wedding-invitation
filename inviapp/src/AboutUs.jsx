
import React from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Hero.css";

import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-page">

      {/* Navbar */}
      <Navbar />

      {/* About Us Hero Heading */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          Creating beautiful memories through elegant wedding invitations.
        </p>
      </section>

      {/* Section 1 - Content Left, Image Right */}
      <section className="about-content-section">
        <div className="about-text">
          <h2>We Make Your Special Moments Memorable</h2>

          <p>
            Welcome to Cherish By Wed Knot Craft, where every celebration
            deserves a beautiful beginning. We create elegant and creative
            wedding invitations that reflect your unique love story.
          </p>

          <p>
            Our goal is to bring your ideas to life through thoughtfully
            designed invitation cards that make every occasion special.
          </p>
        </div>

        <div className="about-image">
          <img
            src="/about-section1.png"
            alt="Beautiful wedding invitation"
          />
        </div>
      </section>

      {/* Section 2 - Image Left, Content Right */}
      <section className="about-content-section about-reverse">

        <div className="about-image">
          <img
            src="/about-section2.png"
            alt="Wedding celebration"
          />
        </div>

        <div className="about-text">
          <h2>Designed With Love and Creativity</h2>

          <p>
            We believe that an invitation is more than just a card.
            It is the first glimpse of your celebration and the beginning
            of a beautiful memory.
          </p>

          <p>
            From traditional designs to modern themes, our collection
            offers different styles to match your personality and event.
          </p>
        </div>

      </section>

      {/* Section 3 - Content Left, Image Right */}
      <section className="about-content-section">

        <div className="about-text">
          <h2>Our Commitment to Excellence</h2>

          <p>
            Every design is created with attention to detail, creativity,
            and care. We focus on delivering invitation designs that are
            attractive, meaningful, and suitable for your celebration.
          </p>

          <p>
            We continuously explore new styles and ideas to make your
            invitation experience simple, beautiful, and memorable.
          </p>
        </div>

        <div className="about-image">
          <img
            src="/about-section3.png"
            alt="Elegant wedding decoration"
          />
        </div>

      </section>

      {/* Final Section */}
      <section className="about-final-section">

        <h2>Let Your Story Begin With Us</h2>

        <p>
          Your special moments deserve a special invitation. Explore our
          collection and find the perfect design to begin your celebration.
          We are happy to be a part of your beautiful journey.
        </p>

        <Link to="/wedding-cards" className="about-explore-btn">
          Explore Wedding Cards
        </Link>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default AboutUs;