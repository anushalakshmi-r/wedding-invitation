
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (card) => {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (item) => item.image === card.image
      );

      if (existingItem) {
        return previousItems.map((item) =>
          item.image === card.image
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...previousItems,
        {
          ...card,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (image) => {
    setCartItems((previousItems) =>
      previousItems.map((item) =>
        item.image === image
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (image) => {
    setCartItems((previousItems) =>
      previousItems
        .map((item) =>
          item.image === image
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (image) => {
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.image !== image)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}