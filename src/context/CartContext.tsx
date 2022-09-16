import { createContext, useContext, ReactNode, useState } from "react";

type CartProviderProps = {
  children: ReactNode;
};

type CartContext = {
  openCart: () => void;
  closeCart: () => void;
};

type CartItem = {
  id: number;
  quantity: number;
};

// initialize CartContext : CartContext contains type CartContext from above

const CartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(CartContext);
}

//implement the provider
export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [isOpen, setIsOpen] = useState(false);

  function openCart() {
    setIsOpen(true);
  }

  function closeCart() {
    setIsOpen(false);
  }

  return (
    <CartContext.Provider
      value={{
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
