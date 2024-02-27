import { combineReducers } from "redux";
import checkoutReducer from "./checkoutReducer";
import cartReducer from "./cartReducer"

export default combineReducers({
  checkout: checkoutReducer,
  cart: cartReducer,
});