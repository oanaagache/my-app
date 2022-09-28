import { RootState } from "../../store/store";

export const useCartTotalSelector = (state: RootState) =>
  state.cart.reduce((total, current) => (total += current.quantity), 0);
