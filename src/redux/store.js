import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./quoteSlice.js";

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});
