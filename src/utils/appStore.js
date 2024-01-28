import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import cartsReducer from "./cartsSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    carts: cartsReducer,
  },
});

// For each slice we will have an item in our config -> reducer

export default appStore;
