import { CART_PRODUCT } from "../types";

const initialState = {
  dataCart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_PRODUCT:
      return {
        ...state,
        dataCart: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;