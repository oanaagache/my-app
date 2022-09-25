import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IProduct } from "../../types/IProduct";

export const useSearchSelector = (id: string) => {
  const product = useSelector((state: RootState) =>
    state.products.products.filter((product: IProduct) => product._uuid === id)
  );
  return product;
};
