import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./Slices";

export const store = configureStore({
  reducer,
});
