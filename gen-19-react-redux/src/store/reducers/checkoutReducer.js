import { CHECKOUT_PRODUCT } from "../types";

const initialState = {
  dataCheckout: [],
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_PRODUCT:
      return {
        ...state,
        dataCheckout: action.payload,
      };
    default:
      return state;
  }
};

export default checkoutReducer;