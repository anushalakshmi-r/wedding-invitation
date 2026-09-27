
import React, { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (card) => {
    setWishlistItems((previousItems) => {
      const alreadyExists = previousItems.some(
        (item) => item.image === card.image
      );

      if (alreadyExists) {
        return previousItems;
      }

      return [...previousItems, card];
    });
  };

  const removeFromWishlist = (image) => {
    setWishlistItems((previousItems) =>
      previousItems.filter((item) => item.image !== image)
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}