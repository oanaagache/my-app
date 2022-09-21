import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../service/productService";
import { keyBuilder } from "../../types/keyBuilder/keyBuilder";

export const useProductsQuery = () => {
  return useQuery(keyBuilder.products(), getProducts);
};
