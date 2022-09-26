import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      console.log("increment");
      state.count++;
    },
    decrement(state) {
      console.log("decrement");
      state.count--;
    },
    incrementByValue(state, action) {
      console.log("incrementByValue");
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
//console.log(counterReducer);
//console.log(counterSlice);
