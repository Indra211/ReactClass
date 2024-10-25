import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./slicer";

export const store = configureStore({
  reducer: {
    count: CounterReducer,
  },
});
