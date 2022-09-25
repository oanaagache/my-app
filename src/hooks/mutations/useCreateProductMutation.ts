import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postProduct } from "../../service/productService";
import { keyBuilder } from "../../types/keyBuilder/keyBuilder";

export const useCreateProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(postProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(keyBuilder.products())
    },
  });
};
