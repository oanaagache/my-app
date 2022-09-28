import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  quantity: number;
  id: number;
  total: number;
  current: number;
  price: number;
  name: string;
}
const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartState[],
  reducers: {
    addToCart(state, { payload }) {
      const { id } = payload;

      const productItem = state.find((item) => item.id === id);
      console.log("productItems:");
      console.log(productItem);
      if (productItem) {
        return state.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        state.push({
          ...payload,
          quantity: 1,
        });
      }
    },
    increment(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    },
    decrement(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, increment, decrement } = cartSlice.actions;
