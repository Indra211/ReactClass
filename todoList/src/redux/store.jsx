import { configureStore } from "@reduxjs/toolkit";
import { TodoReducer } from "./todoSlicer";

export const store = configureStore({
  reducer: {
    todos: TodoReducer,
  },
});
