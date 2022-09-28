import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: true,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
  },
});

export default modalSlice.reducer;
export const { toggle } = modalSlice.actions;
