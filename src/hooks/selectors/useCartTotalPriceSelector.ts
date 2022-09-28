import { RootState } from "../../store/store";

export const useCartTotalPriceSelector = (state: RootState) =>
  state.cart.reduce(
    (total, current) => (total += current.price * current.quantity),
    0
  );
