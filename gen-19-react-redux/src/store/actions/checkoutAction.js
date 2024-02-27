import { CHECKOUT_PRODUCT } from "../types";

export const checkoutProduct = (payload) => ({
  type: CHECKOUT_PRODUCT,
  payload,
});