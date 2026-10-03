import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // [{ product, quantity }]

  function addToCart(product, quantity = 1) {
    setItems((prev) => {
      const existing = prev.find((it) => it.product.id === product.id);
      if (existing) {
        return prev.map((it) =>
          it.product.id === product.id
            ? { ...it, quantity: it.quantity + quantity }
            : it
        );
      }
      return [...prev, { product, quantity }];
    });
  }

  // Ajoute plusieurs produits en une fois — utilisé par la page "liste de
  // fournitures par classe" pour ajouter toute la liste en un clic.
  function addManyToCart(entries) {
    setItems((prev) => {
      const next = [...prev];
      for (const { product, quantity } of entries) {
        const existingIndex = next.findIndex((it) => it.product.id === product.id);
        if (existingIndex >= 0) {
          next[existingIndex] = {
            ...next[existingIndex],
            quantity: next[existingIndex].quantity + quantity,
          };
        } else {
          next.push({ product, quantity });
        }
      }
      return next;
    });
  }

  function removeFromCart(productId) {
    setItems((prev) => prev.filter((it) => it.product.id !== productId));
  }

  function updateQuantity(productId, quantity) {
    setItems((prev) =>
      prev
        .map((it) => (it.product.id === productId ? { ...it, quantity } : it))
        .filter((it) => it.quantity > 0)
    );
  }

  const totalItems = useMemo(
    () => items.reduce((sum, it) => sum + it.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, it) => sum + it.quantity * it.product.price, 0),
    [items]
  );

  const value = {
    items,
    addToCart,
    addManyToCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart doit être utilisé à l'intérieur de CartProvider");
  return ctx;
}
