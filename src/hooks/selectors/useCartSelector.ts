import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IProduct } from "../../types/IProduct";

export const useCartSelector = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  return cart as IProduct[];
};

//const cart = useCartSelector();
//const cart = useSelector((state) => state.cart);
