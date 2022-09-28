import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import counterReducer from "./counterSlice";
import cartReducer from "./cartSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    counter: counterReducer,
    cart: cartReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

console.log(store.getState());
