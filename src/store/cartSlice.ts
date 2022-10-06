import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../types/IProduct";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalAmount: 0,
    totalCount: 0,
    quantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      //const { id } = payload;
      const isItemExist = state.cart.find(
        (item: { quantity: number; id: string }) =>
          item.id === action.payload.id
      );
      if (!isItemExist) {
        return [...state.cart, { ...action.payload, quantity: 1 }];
        //state.cart.push();
      } else {
        state.cart.map((item: { quantity: number; id: string }) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
      state.quantity++;
      state.totalAmount += action.payload.price;
    },

    removeFromCart: (state, { payload }) => {
      const { id } = payload;
      state.cart = state.cart.filter((item: { id: string }) => item.id !== id);
    },

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

    increment: (state, { payload }) => {
      //const { id } = payload;
      state.cart.map((item: { quantity: number; id: string }) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      state.quantity++;
      state.totalAmount += payload.price;
    },

    decrement: (state, { payload }) => {
      state.cart
        .map((item: { quantity: number; id: string }) => {
          if (item.id === payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);
      state.quantity--;
      state.totalAmount -= payload.price;
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
  removeFromCart,
  increment,
  decrement,
  clearCart,
  getCartItems,
} = cartSlice.actions;
