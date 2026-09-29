
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./HinduCollection.css";
import "./Hero.css";
import { useWishlist } from "./WishlistContext";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./CartContext";
import CartModal from "./CartModal";

const hinduCards = [
  { image: "/hindu1.png", name: "The Blue Wedding Card", price: 72.35 },
  { image: "/hindu2.png", name: "Ganesha Wedding Card", price: 25.25 },
  { image: "/hindu3.png", name: "Wedding Card Favor Box", price: 39.65 },
  { image: "/hindu4.png", name: "Theme Wedding Card", price: 30.0 },
  { image: "/hindu5.png", name: "Vintage Wedding Card", price: 30.15 },
  { image: "/hindu6.png", name: "Elegant Peacock Wedding Card", price: 15.0 },
  { image: "/hindu7.png", name: "Unique Wedding Card", price: 22.5 },
  { image: "/hindu8.png", name: "Wardrope Wedding Card", price: 59.75 },
  { image: "/hindu9.png", name: "Editable Wedding Card", price: 35.5 },
  { image: "/hindu10.png", name: "Traditional Wedding Card", price: 25.0 },
  { image: "/hindu11.png", name: "Royal Scroll Wedding Card", price: 75.0 },
  { image: "/hindu12.png", name: "Gate Fold Wedding Card", price: 43.2 },
];

function HinduCollection() {
  const {
  wishlistItems,
  addToWishlist,
  removeFromWishlist,
} = useWishlist();
  const { addToCart } = useCart();
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (card) => {
    addToCart(card);
    setShowCart(true);
  };

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
                <p>₹{Number(card.price).toFixed(2)}</p>
              </div>

              
<button
  className="hindu-add-cart-btn"
  onClick={() => handleAddToCart(card)}
>
  <FaShoppingCart /> Add to Cart
</button>
            </div>
            
            
          ))}
        </div>
         
      </section>

      {showCart && <CartModal onClose={() => setShowCart(false)} />}
         
      <Footer />
    </>
  );
}

export default HinduCollection;