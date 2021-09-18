import { configureStore } from "@reduxjs/toolkit";
import funksion from "../redux-toolkit/store/store";
export const mystore = configureStore({
  reducer: {
    betbuqsport: funksion,
  },
});
