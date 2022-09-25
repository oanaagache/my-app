import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../../service/productService";
import { keyBuilder } from "../../types/keyBuilder/keyBuilder";

export const useDeleteProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteProduct, {
    onSuccess: (product) => {
      queryClient.invalidateQueries(keyBuilder.product(product._uuid));
    },
  });
};
