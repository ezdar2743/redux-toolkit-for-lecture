import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counter";

export const store = configureStore({
  reducer: {
    count: countReducer,
  },
});
