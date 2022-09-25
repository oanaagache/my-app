import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putProduct } from "../../service/productService";
import { keyBuilder } from "../../types/keyBuilder/keyBuilder";

export const useUpdateProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(putProduct, {
    onSuccess: (product) => {
      queryClient.invalidateQueries(keyBuilder.product(product._uuid));
    },
  });
};
