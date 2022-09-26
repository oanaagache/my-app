import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IProduct } from "../../types/IProduct";

export const useProductsSelector = () => {
  const products = useSelector((state: RootState) => state.products.products);
  return products;
};
