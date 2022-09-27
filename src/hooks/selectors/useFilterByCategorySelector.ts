import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IProduct } from "../../types/IProduct";

export const useFilterByCategorySelector = (category: string | undefined) => {
  const products = useSelector((state: RootState) =>
    state.products.products.filter(
      (product: IProduct) => product.category === category
    )
  );
  return products as IProduct[];
};
