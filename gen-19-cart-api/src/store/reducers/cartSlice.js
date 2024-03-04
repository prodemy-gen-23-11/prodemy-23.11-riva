import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartProduct: (state, action) => {
      state.dataCart = action.payload;
    },
  },
});

export const { cartProduct} = cartSlice.actions;

export default cartSlice.reducer;