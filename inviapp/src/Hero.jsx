
import React from "react";
import "./Hero.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import {
  FaClipboardList,
  FaFileAlt,
  FaMobileAlt,
  FaBoxOpen,
  FaTruck
} from "react-icons/fa";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="hero-section">

        <div className="hero-card">

          {/* Hero Content */}

          <h1>Your Love Story Begins Here</h1>

          <p>
            Create stunning wedding invitations that capture
            the essence of your special day. Elegant designs,
            heartfelt words, and everything you need to make
            your first impression unforgettable.
          </p>

          {/* CTA Button */}
          <Link to="/wedding-cards" className="get-card-btn">
                     Get Your Style <span>→</span>
            </Link>

        </div>

      </section>


      {/* ================= INVITATION DESIGNS ================= */}

      <section className="invitation-designs">

        <img
          src="/pictures3.png"
          alt="Elegant wedding invitation designs"
        />

      </section>


      {/* ================= UNIQUE INVITATIONS ================= */}

      <section className="unique-invitations">

        <div className="section-heading">

          <h2>Unique and Exclusive Invitation Cards</h2>

          <p>
            Because each wedding is truly unique and memorable.
          </p>

        </div>


        <div className="card-container">

          <div className="card">

            <img
              src="/hinducard.png"
              alt="Hindu Wedding Card"
            />

          </div>


          <div className="card">

            <img
              src="/luxurycard.png"
              alt="Luxury Wedding Card"
            />

          </div>


          <div className="card">

            <img
              src="/floralcard.png"
              alt="Floral Wedding Card"
            />

          </div>

        </div>


        <div className="card-categories">

          <h3>Hindu Wedding Cards</h3>

          <h3>Luxury Cards</h3>

          <h3>Floral Wedding Cards</h3>

        </div>

      </section>


      {/* ================= THEME BASED INVITATION ================= */}

    
{/* ================= THEME BASED INVITATION ================= */}

<section className="theme-invitations">

  <div className="section-heading">

    <h2>Theme Based Invitation</h2>

    <p>
      Theme Based Invitation
    </p>

  </div>


  <div className="theme-card-container">


    {/* Beach Theme Card */}

    <div className="theme-card-wrapper">

      <div className="theme-card">

        <div className="theme-image">

          <img
            src="/beachtheme.png"
            alt="Beach Theme Wedding Card"
          />

        </div>

      </div>

      <h3>Beach Theme Card</h3>

    </div>


    {/* Birds Theme Card */}

    <div className="theme-card-wrapper">

      <div className="theme-card">

        <div className="theme-image">

          <img
            src="/birdstheme.png"
            alt="Birds Theme Wedding Card"
          />

        </div>

      </div>

      <h3>Birds Theme Card</h3>

    </div>


    {/* Palace Theme Card */}

    <div className="theme-card-wrapper">

      <div className="theme-card">

        <div className="theme-image">

          <img
            src="/palacetheme.png"
            alt="Palace Theme Wedding Card"
          />

        </div>

      </div>

      <h3>Palace Theme Card</h3>

    </div>


  </div>

</section>

<div className="image-section">
  <div className="image-container">
    <img src="/screenshot1.png" 
        alt="Wedding Invitation 1" />
  </div>

  <div className="image-container">
    <img src="/screenshot2.png" 
         alt="Wedding Invitation 2" />
  </div>
</div>

{/* ================= SIMPLE AND AFFORDABLE WEDDING CARDS ================= */}

<section className="affordable-cards-section">

  <div className="section-heading">

    <h2>Simple and Affordable Wedding Cards</h2>

    <p>
      Beautiful designs at prices you'll love.
      Find the perfect invitation for your special day.
    </p>

  </div>


  <div className="affordable-card-container">


    {/* Card 1 */}

    <div className="affordable-card">

      <div className="affordable-image">

        <img
          src="/redcard.png"
          alt="Classic Floral Wedding Card"
        />

      </div>

      <h3>Red Invite Card With <br/>
        Bride and Groom Names</h3>

      <div className="product-bottom">

        <span className="product-price">Rs.10.25</span>

        <div className="product-actions">

          <button
            className="transparent-action-btn"
            aria-label="Add Classic Floral card to wishlist"
          >
            <FaHeart />
          </button>

          <button
            className="transparent-action-btn"
            aria-label="Add Classic Floral card to cart"
          >
            <FaShoppingCart />
          </button>

        </div>

      </div>

    </div>


    {/* Card 2 */}

    <div className="affordable-card">

      <div className="affordable-image">

        <img
          src="/yellowcard.png"
          alt="Royal Gold Wedding Card"
        />

      </div>

      <h3>Simple Red and Yellow Card<br/>Invite with Bride And Groom<br/>Nmaes</h3>

      <div className="product-bottom">

        <span className="product-price">Rs.5.00</span>

        <div className="product-actions">

          <button
            className="transparent-action-btn"
            aria-label="Add Royal Gold card to wishlist"
          >
            <FaHeart />
          </button>

          <button
            className="transparent-action-btn"
            aria-label="Add Royal Gold card to cart"
          >
            <FaShoppingCart />
          </button>

        </div>

      </div>

    </div>


    {/* Card 3 */}

    <div className="affordable-card">

      <div className="affordable-image">

        <img
          src="/redvertical.png"
          alt="Pastel Love Wedding Card"
        />

      </div>

      <h3>Red Vertical Personal Invite With<br/>Bride ANd Groom Names</h3>

      <div className="product-bottom">

        <span className="product-price">Rs.7.00</span>

        <div className="product-actions">

          <button
            className="transparent-action-btn"
            aria-label="Add Pastel Love card to wishlist"
          >
            <FaHeart />
          </button>

          <button
            className="transparent-action-btn"
            aria-label="Add Pastel Love card to cart"
          >
            <FaShoppingCart />
          </button>

        </div>

      </div>

    </div>


    {/* Card 4 */}

    <div className="affordable-card">

      <div className="affordable-image">

        <img
          src="/god.png"
          alt="Minimal Elegant Wedding Card"
        />

      </div>

      <h3>White Personal Invite with<br/>Bride And Groom Names</h3>

      <div className="product-bottom">

        <span className="product-price">Rs.7.50</span>

        <div className="product-actions">

          <button
            className="transparent-action-btn"
            aria-label="Add Minimal Elegant card to wishlist"
          >
            <FaHeart />
          </button>

          <button
            className="transparent-action-btn"
            aria-label="Add Minimal Elegant card to cart"
          >
            <FaShoppingCart />
          </button>

        </div>

      </div>

    </div>


    {/* Card 5 */}

    <div className="affordable-card">

      <div className="affordable-image">

        <img
          src="/ganapathy.png"
          alt="Traditional Wedding Card"
        />

      </div>

      <h3>Brown With Vinayagar Picture<br/>Invite with Bride and Groom <br/>Names</h3>

      <div className="product-bottom">

        <span className="product-price">Rs.7.00</span>

        <div className="product-actions">

          <button
            className="transparent-action-btn"
            aria-label="Add Traditional card to wishlist"
          >
            <FaHeart />
          </button>

          <button
            className="transparent-action-btn"
            aria-label="Add Traditional card to cart"
          >
            <FaShoppingCart />
          </button>

        </div>

      </div>

    </div>


    {/* Card 6 */}

    <div className="affordable-card">

      <div className="affordable-image">

        <img
          src="/marroncard.png"
          alt="Modern Wedding Card"
        />

      </div>

      <h3>Merron Card With Rangoli Theme <br/> Personal Invite Bride And<br/> Groom Names</h3>

      <div className="product-bottom">

        <span className="product-price">Rs.9.00</span>

        <div className="product-actions">

          <button
            className="transparent-action-btn"
            aria-label="Add Modern card to wishlist"
          >
            <FaHeart />
          </button>

          <button
            className="transparent-action-btn"
            aria-label="Add Modern card to cart"
          >
            <FaShoppingCart />
          </button>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= SUMMER SALE SECTION ================= */}

<section className="summer-sale-section">

  {/* Left Side - Summer Sale Heading */}
  <div className="summer-sale-heading">

    <h2>Summer</h2>

    <span>Sale</span>

  </div>


  {/* Right Side - Discount Details */}
  <div className="summer-sale-content">

    <div className="discount-list">

      <p>100 cards - 10% Off</p>

      <p>200 cards - 15% Off</p>

      <p>300 cards - 20% Off</p>

      <p>400 cards - 25% Off</p>

      <p>500 cards - 30% Off</p>

    </div>


    {/* Stock Clearance Offer */}
    <div className="stock-clearance">

      <p>Stock Clearance - 40% to 60% off</p>

    </div>


    {/* Terms and Conditions */}
    <p className="sale-terms">

      This offer is not applicable on customized cards,
      E-cards and Luxury boxes.

    </p>

  </div>

</section>

{/* ================= INVITATION COLLECTIONS SECTION ================= */}

<section className="invitation-collections-section">

  <div className="collections-heading">

    <h2>Invitation Collections</h2>

    <p>
      Explore our beautiful wedding invitation collections
      crafted for every tradition and love story.
    </p>

  </div>


  <div className="collections-card-container">

    {/* Hindu Collection */}

    <div className="collection-card">

      <div className="collection-image">

        <img
          src="/hindu-collection.png"
          alt="Hindu Invitation Collection"
        />

      </div>

      <div className="collection-card-content">

        <h3>Hindu Invitation <br/>Collections</h3>

        <Link to="/hindu-collection" className="collection-buy-btn">
  Buy Now
</Link>

      </div>

    </div>


    {/* Christian Collection */}

    <div className="collection-card">

      <div className="collection-image">

        <img
          src="/christian-collection.png"
          alt="Christian Invitation Collection"
        />

      </div>

      <div className="collection-card-content">

        <h3>Christian Invitation Collections</h3>

        <button className="collection-buy-btn">
          Buy Now
        </button>

      </div>

    </div>


    {/* Muslim Collection */}

    <div className="collection-card">

      <div className="collection-image">

        <img
          src="/muslim-collection.png"
          alt="Muslim Invitation Collection"
        />

      </div>

      <div className="collection-card-content">

        <h3>Muslim Invitation<br/> Collections</h3>

        <button className="collection-buy-btn">
          Buy Now
        </button>

      </div>

    </div>


    {/* Interfaith Collection */}

    <div className="collection-card">

      <div className="collection-image">

        <img
          src="/interfaith-collection.png"
          alt="Interfaith Invitation Collection"
        />

      </div>

      <div className="collection-card-content">

        <h3>Interfaith Invitation<br/> Collections</h3>

        <button className="collection-buy-btn">
          Buy Now
        </button>

      </div>

    </div>

  </div>

</section>

{/* ================= CLIENT TESTIMONIALS SECTION ================= */}

<section className="client-testimonials-section">

  {/* Section Heading */}

  <div className="testimonials-heading">

    <h2>What Client Say About Us</h2>

    <p>
      Hear from our happy clients who made their special moments
      even more memorable with our invitation cards.
    </p>

  </div>


  {/* Testimonials Cards */}

  <div className="testimonials-card-container">


    {/* Testimonial 1 */}

    <div className="testimonial-card">

      <div className="client-image">

        <img
          src="/client1.png"
          alt="Client Priya"
        />

      </div>

      <h3>Priya & Arjun</h3>

      <h4>Elegant designs made our wedding special</h4>

      <p className="client-review">
        We loved the beautiful design and premium quality
        of our wedding invitation. The colors, fonts and
        finishing were exactly what we expected.
        Our family and friends appreciated the elegant
        invitation, and the overall experience was wonderful.
      </p>

      <div className="client-stars">
        <span>★ ★ ★ ★ ★</span>
      </div>

    </div>


    {/* Testimonial 2 */}

    <div className="testimonial-card">

      <div className="client-image">

        <img
          src="/client2.png"
          alt="Client Sarah"
        />

      </div>

      <h3>Sarah & Daniel</h3>

      <h4>A beautiful invitation for our special day</h4>

      <p className="client-review">
        The invitation card looked stunning and had
        a beautiful traditional touch. The quality,
        presentation and attention to detail were amazing.
        We received many compliments from our guests
        and are very happy with our purchase.
      </p>

      <div className="client-stars">
        <span>★ ★ ★ ★ ★</span>
      </div>

    </div>


    {/* Testimonial 3 */}

    <div className="testimonial-card">

      <div className="client-image">

        <img
          src="/client3.png"
          alt="Client Ayesha"
        />

      </div>

      <h3>Ayesha & Rahman</h3>

      <h4>Perfect design and excellent quality</h4>

      <p className="client-review">
        We selected a customized wedding invitation
        and loved the final result. The design was
        elegant, the details were carefully finished,
        and the card looked premium. It made our
        wedding invitation truly memorable.
      </p>

      <div className="client-stars">
        <span>★ ★ ★ ★ ★</span>
      </div>

    </div>


  </div>

</section>

{/* ================= HOW IT WORKS SECTION ================= */}

<section className="how-it-works-section">

  {/* Section Heading */}

  <div className="how-it-works-heading">

    <h2>How It Works</h2>

  </div>


  {/* Steps Container */}

  <div className="how-it-works-container">


    {/* Step 1 */}

    <div className="work-step">

      <div className="work-icon">

        <FaClipboardList color="#3498db" size="2em" />

      </div>

      <p>Order Sample</p>

    </div>


    {/* Step 2 */}

    <div className="work-step">

      <div className="work-icon">

        <FaFileAlt color="red" size="2em" />

      </div>

      <p>Get Sample Order In 5 days</p>

    </div>


    {/* Step 3 */}

    <div className="work-step">

      <div className="work-icon">

        <FaMobileAlt color="green" size="2em" />

      </div>

      <p>Approve Digital Draft</p>

    </div>


    {/* Step 4 */}

    <div className="work-step">

      <div className="work-icon">

        <FaBoxOpen color="darkred" size="2em" />

      </div>

      <p>Place Your Bulk Order</p>

    </div>


    {/* Step 5 */}

    <div className="work-step">

      <div className="work-icon">

        <FaTruck color="orange" size="2em"/>

      </div>

      <p>Print & Delivery</p>

    </div>

  </div>

</section>

<Footer />
    </>
  );
}

export default Hero;