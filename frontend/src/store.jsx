import { configureStore } from "@reduxjs/toolkit";
import {productListReducer,productDetailsReducer} from "./reducers/productReducers";
import {cartReducer} from "./reducers/cartReducerss";
import {userLoginReducer} from './reducers/userReducers'
 

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null


const initialState = {
  cart: {
      cartItems: cartItemsFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
}


export const store  = configureStore({
  reducer: {
    products: productListReducer,
    productDetails: productDetailsReducer,
    cart : cartReducer,
    userLogin : userLoginReducer,
  },
  preloadedState: initialState,
});
