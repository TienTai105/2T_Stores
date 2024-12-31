import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
      return [];
    }
  });

  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartItemCount(totalCount);

    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cart]);

  const addToCart = (product, quantity, size) => {
    if (!product || quantity <= 0 || !size) return;

    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(
      (item) => item.product._id === product._id && item.size === size
    );

    if (productIndex === -1) {
      updatedCart.push({ product, quantity, size });
    } else {
      updatedCart[productIndex].quantity += quantity;
    }

    setCart(updatedCart);
  };

  const removeFromCart = (productId, size) => {
    const updatedCart = cart.filter(
      (item) => item.product._id !== productId || item.size !== size
    );
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
    try {
      localStorage.removeItem("cart");
    } catch (error) {
      console.error("Failed to clear cart from localStorage:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItemCount,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
