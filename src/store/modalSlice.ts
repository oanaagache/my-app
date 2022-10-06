import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  setShow: true,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggle(state) {
      state.setShow = !state.setShow;
    },
  },
});

export default modalSlice.reducer;
export const { toggle } = modalSlice.actions;
