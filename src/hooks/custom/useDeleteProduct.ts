import { useCallback, useState } from "react";
import { deleteProduct } from "../../service/productService";
import { IProduct } from "../../types/IProduct";

export const useDeleteProduct = () => {
  const [product, setProduct] = useState<IProduct>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const removeProduct = useCallback(async (uuid: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await deleteProduct(uuid);
      setProduct(data);
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    isError,
    product,
    removeProduct,
  };
};
