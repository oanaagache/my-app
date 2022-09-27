import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IProduct } from "../../types/IProduct";

export const useFilteredProductsSelector = () => {
  const products = useSelector((state: RootState) =>
    state.products.products.filter((product: IProduct) =>
      product.name.toLowerCase().includes(state.products.search)
    )
  );
  return products as IProduct[];
};
