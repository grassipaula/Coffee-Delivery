import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default"
import { Router } from "./routes/Router";
import { CartContentContext, CartItemInterface } from "./context/CartContext";
import { useState } from 'react'
import { QuantityValue } from "./pages/Home/components/CoffeeQuantity/styles";


export function App() {
  const [cartItems, setCartItems] = useState<CartItemInterface[]>([])

  const addItemToCart = (cartItem: CartItemInterface) => {
    if (cartItem.quantity === 0) return;

    const cartItemsFiltered = cartItems.filter((item) => item.id === cartItem.id)

    const itemExistsOnCart = cartItemsFiltered.length > 0

    const cartItemsWithQuantity = cartItems.map((item) => {
      if (item.id === cartItem.id) {
        return { ...item, quantity: item.quantity + cartItem.quantity }
      } else {
        return item
      }
    })

    const newCartItems = itemExistsOnCart ? cartItemsWithQuantity : [cartItem, ...cartItems]

    setCartItems(newCartItems)

    console.log(newCartItems)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
    <CartContentContext.Provider value={{
          cartItems, setCartItems, addItemToCart
        }}>
    <Router />
    </CartContentContext.Provider>
    </BrowserRouter>
    <GlobalStyle />
  </ThemeProvider >
  )
}


