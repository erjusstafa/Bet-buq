import { configureStore } from "@reduxjs/toolkit";
import betBuqReducer from "./store/store";

export const mystore = configureStore({
  reducer: {
    betbuqsport: betBuqReducer,
  },
});

