import { configureStore } from "@reduxjs/toolkit";
import {productListReducer,productDetailsReducer} from "./reducers/productReducers";
import {cartReducer} from "./reducers/cartReducerss";
 
export const store = configureStore({
  reducer: {
    products: productListReducer,
    productDetails: productDetailsReducer,
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