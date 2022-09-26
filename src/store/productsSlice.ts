import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

// const action = {
//   type: "SET_PRODUCTS",
//   payload: { products: [""] },
// };

// const action = {
//   type: "FILTER_BY_CATEGORY",
//   payload: { category: "" },
// };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      console.log("setProducts");
    },
  },
});

export default productsSlice.reducer;
export const { setProducts } = productsSlice.actions;
