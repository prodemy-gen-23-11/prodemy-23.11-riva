import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartProduct: (state, action) => {
      console.log(action.payload)
      state.dataCart = action.payload;
    },
    addToCart(state, action) {
      const id = action.payload.descriptionProductId;
      const count = action.payload.count;
      const userId = action.payload.userId;

      const existingItem = state.dataCart.find(
        (item) => item.descriptionProductId === id && item.userId === userId
      );

      if (existingItem) {
        state.dataCart.forEach((item) => {
          if (item.descriptionProductId === id && item.userId === userId) {
            item.count = count;
          }
        });
      } else {
        state.dataCart.push({ ...action.payload });
      }
    },
  },
});

export const {  addToCart, cartProduct} = cartSlice.actions;

export default cartSlice.reducer;