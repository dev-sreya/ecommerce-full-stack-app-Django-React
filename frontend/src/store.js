import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import {cartReducer} from "./reducers/cartReducerss";
 
export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart : cartReducer,
  },
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []


const initialState = {
  cart: {
      cartItems: cartItemsFromStorage,
  },
}