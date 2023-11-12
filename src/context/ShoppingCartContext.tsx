import {ReactNode, createContext, useContext, useState} from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  name: string;
  quantity: number;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromcart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

const useShopingCart = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({
  children,
}: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, {id, quantity: 1}];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return {...item, quantity: item.quantity + 1};
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity == 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return {...item, quantity: item.quantity - 1};
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromcart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromcart,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default useShopingCart;
