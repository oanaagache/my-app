import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../service/productService";
import { keyBuilder } from "../../types/keyBuilder/keyBuilder";
import { useDispatch } from "react-redux";
import { setProducts } from "../../store/productsSlice";
function setSearch(data: import("../../types/IProduct").IProduct[]): any {
  throw new Error("Function not implemented.");
}

export const useProductsQuery = () => {
  const dispatch = useDispatch();

  return useQuery(keyBuilder.products(), getProducts, {
    onSuccess: (data) => {
      console.log(data);
      dispatch(setProducts(data));
    },
  });
};
