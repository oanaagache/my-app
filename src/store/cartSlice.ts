import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  _uuid: string;
  name: string;
  price: number;
  category: string;
  quantity: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] as any[] },
  reducers: {
    addToCart: (state, { payload }) => {
      const { id } = payload;
      const itemInCart = state.cart.find(
        (item: { _uuid: string; quantity: number }) => item._uuid === id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...payload, quantity: 1 });
      }
    },
    increment: (state, { payload }) => {
      const { id } = payload;
      const item = state.cart.find(
        (item: { quantity: number; _uuid: string }) => item._uuid === id
      );
      item.quantity += 1;
    },

    decrement: (state, { payload }) => {
      const { id } = payload;
      const item = state.cart.find(
        (item: { _uuid: string }) => item._uuid === id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity -= 1;
      }
    },
    removeFromCart: (state, { payload }) => {
      const { id } = payload;
      const removeItem = state.cart.filter(
        (item: { quantity: number; _uuid: string }) => item._uuid !== id
      );
      state.cart = removeItem;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, increment, decrement, removeFromCart } =
  cartSlice.actions;
