import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setIcrement: (state) => {
      state.count = state.count + 1;
    },
    setDrecement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { setDrecement, setIcrement } = CounterSlice.actions;
export const CounterReducer = CounterSlice.reducer;
