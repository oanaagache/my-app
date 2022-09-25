import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const useProductsSelector = () => {
  const products = useSelector((state: RootState) => state.products.products);
  return products;
};
