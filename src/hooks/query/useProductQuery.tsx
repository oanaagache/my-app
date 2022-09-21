import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../service/productService";
import { keyBuilder } from "../../types/keyBuilder/keyBuilder";

export const useProductQuery = (uuid: string) => {
  return useQuery(keyBuilder.product(uuid), () => getProduct(uuid));
};
