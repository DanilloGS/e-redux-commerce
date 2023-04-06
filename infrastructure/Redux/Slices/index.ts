import { combineReducers } from "@reduxjs/toolkit";
import cartReducers from "./cart";

export const reducer = combineReducers({
  cart: cartReducers,
});
