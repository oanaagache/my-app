import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../service/productService";
import { keyBuilder } from "../../types/keyBuilder/keyBuilder";
import { useDispatch } from "react-redux";
import { setProducts } from "../../store/productsActionCreators";

export const useProductsQuery = () => {
  const dispatch = useDispatch();

  return useQuery(keyBuilder.products(), getProducts, {
    onSuccess: (data) => {
      console.log(data);
      dispatch(setProducts(data));
    },
  });
};
