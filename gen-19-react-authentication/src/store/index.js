import { configureStore } from "@reduxjs/toolkit";
import checkoutSlice from "./reducers/checkoutSlice";
import cartSlice from "./reducers/cartSlice";
import authSlice from "./reducers/authSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    checkout: checkoutSlice,
    auth: authSlice,
  },
});

export default store;