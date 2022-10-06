import { useSelector } from "react-redux";
 import { RootState } from "../../store/store";

 export const useCartTotalPriceSelector = () => {}
// export const useCartTotalPriceSelector = () => {
//   const totalPrice = useSelector((state: RootState) =>
//     state.cart.cart.reduce((cartTotal) => (cartTotal += price * amount), 0)
//   );
//   return totalPrice;
// };

// const itemTotal = price * amount;
// cartTotal.totalAmount += itemTotal;
//state.cart.reduce((total, current) => (total += current.quantity), 0);
