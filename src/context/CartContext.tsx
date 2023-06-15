import { createContext } from "react";

export interface CartItemInterface {
  id: number;
  image: string;
  name: string;
  quantity: number;
  price: number;
}

export interface CartContextType {
  cartItems: CartItemInterface[];
  setCartItems: (items: CartItemInterface[]) => void;
  addItemToCart: (item: CartItemInterface) => void;
}

export const CartContentContext = createContext({} as CartContextType)