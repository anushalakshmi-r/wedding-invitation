
import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./HinduCollection.css";
import "./Hero.css";
import { useWishlist } from "./WishlistContext";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./CartContext";

const hinduCards = [
  { image: "/hindu1.png", name: "The Blue Wedding Card", price: "Rs. 72.35" },
  { image: "/hindu2.png", name: "Ganesha Wedding Card", price: "Rs. 25.25" },
  { image: "/hindu3.png", name: "Wedding Card Favor Box", price: "Rs. 39.65" },
  { image: "/hindu4.png", name: "Theme Wedding Card", price: "Rs. 30.00" },
  { image: "/hindu5.png", name: "Vintage Wedding Card", price: "Rs. 30.15" },
  { image: "/hindu6.png", name: "Elegant Peacock Wedding Card", price: "Rs. 15.00" },
  { image: "/hindu7.png", name: "Unique Wedding Card", price: "Rs. 22.50" },
  { image: "/hindu8.png", name: "Wardrope Wedding Card", price: "Rs. 59.75" },
  { image: "/hindu9.png", name: "Editable Wedding Card", price: "Rs. 35.50" },
  { image: "/hindu10.png", name: "Traditional Wedding Card", price: "Rs. 25.00" },
  { image: "/hindu11.png", name: "Royal Scroll Wedding Card", price: "Rs. 75.00" },
  { image: "/hindu12.png", name: "Gate Fold Wedding Card", price: "Rs. 43.20" },
];

function HinduCollection() {
  const {
  wishlistItems,
  addToWishlist,
  removeFromWishlist,
} = useWishlist();
  const { addToCart } = useCart();
  return (
    <>
      <Navbar />

      <section className="hindu-collection-section">
        <div className="hindu-collection-heading">
          <h1>Hindu Wedding Invitation Collection</h1>
          <p>
            Explore our beautiful collection of Hindu wedding invitation cards.
          </p>
        </div>

        <div className="hindu-card-grid">
          {hinduCards.map((card, index) => (
            <div className="hindu-invitation-card" key={index}>
              <div className="hindu-card-image-wrapper">
                <img src={card.image} alt={card.name} />

                <button
  className={`hindu-wishlist-btn ${
    wishlistItems.some((item) => item.image === card.image)
      ? "wishlist-selected"
      : ""
  }`}
  onClick={() => {
    const alreadyLiked = wishlistItems.some(
      (item) => item.image === card.image
    );

    if (alreadyLiked) {
      removeFromWishlist(card.image);
    } else {
      addToWishlist(card);
    }
  }}
  aria-label="Add to wishlist"
>
  <FaHeart />
</button>
              </div>

              <div className="hindu-card-details">
                <h3>{card.name}</h3>
                <p>{card.price}</p>
              </div>

              
<button
  className="hindu-add-cart-btn"
  onClick={() => addToCart(card)}
>
  <FaShoppingCart /> Add to Cart
</button>
            </div>
            
            
          ))}
        </div>
         
      </section>
         
      <Footer />
    </>
  );
}

export default HinduCollection;