import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import LoginSignup from './LoginSignup'
import WeddingCards from "./WeddingCards";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import FAQ from "./FAQ";
import HowToOrder from "./HowToOrder";
import ScrollToTop from "./ScrollToTop";
import HinduCollection from "./HinduCollection";
import { WishlistProvider } from "./WishlistContext";
import { CartProvider } from "./CartContext";
import Checkout from "./Checkout";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <WishlistProvider>
    <CartProvider>
<ScrollToTop />
        
<Routes>

  {/* Homepage */}

  <Route path="/" element={<App />} />


  {/* Login Page */}

  <Route
    path="/login"
    element={<LoginSignup mode="login" />}
  />

  {/* Signup Page */}

  <Route path="/signup" element={<LoginSignup mode="signup" />}/>
  <Route path="/wedding-cards" element={<WeddingCards />}/>
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/how-to-order" element={<HowToOrder />}/>
    <Route
  path="/hindu-collection"
  element={<HinduCollection />}
/>
<Route path="/checkout" element={<Checkout />} />

</Routes>
</CartProvider>
</WishlistProvider>

    </BrowserRouter>
  </StrictMode>
)
