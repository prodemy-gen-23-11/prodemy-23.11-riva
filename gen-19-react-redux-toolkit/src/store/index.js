import { configureStore } from "@reduxjs/toolkit";
import checkoutSlice from "./reducers/checkoutSlice";
import cartSlice from "./reducers/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    checkout: checkoutSlice,
  },
});

export default store;