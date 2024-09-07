import { configureStore } from "@reduxjs/toolkit";
import data from "./features/data";

export const store = configureStore({
  reducer: {
    data,
  },
});
