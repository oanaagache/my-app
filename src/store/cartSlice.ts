import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalAmount: 0,
    totalCount: 0,
  },
  reducers: {
    getCartTotal: (state) => {
      let { totalAmount, totalCount } = state.cart.reduce(
        (
          cartTotal: { totalAmount: number; totalCount: any },
          cartItem: { price: any; amount: any }
        ) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },

    remove: (state, { payload }) => {
      const { id } = payload;
      state.cart = state.cart.filter((item: { id: string }) => item.id !== id);
    },

    increment: (state, { payload }) => {
      const { id } = payload;
      state.cart.map((item: { amount: number; id: string }) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    },

    decrement: (state, { payload }) => {
      const { id } = payload;
      state.cart
        .map((item: { amount: number; id: string }) => {
          if (item.id === id) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    getCartItems: (state) => {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const {
  getCartTotal,
  remove,
  increment,
  decrement,
  clearCart,
  getCartItems,
} = cartSlice.actions;
