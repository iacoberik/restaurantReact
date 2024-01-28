import { configureStore } from "@reduxjs/toolkit";
import cartItems from "./cartSlice";

const appStorageData = configureStore({
  reducer: {
    cart: cartItems,
  },
});

export default appStorageData;
