import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  search: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      //console.log("setProducts");
    },
    setSearch(state, action) {
      state.search = action.payload;
      //console.log("setSearch");
    },
  },
});

export default productsSlice.reducer;
export const { setProducts, setSearch } = productsSlice.actions;
