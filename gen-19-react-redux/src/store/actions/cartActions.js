import { CART_PRODUCT } from "../types";

export const cartProduct = (payload) => ({
  type: CART_PRODUCT,
  payload,
});