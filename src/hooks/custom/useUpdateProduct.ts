import { useCallback, useState } from "react";
import { putProduct } from "../../service/productService";
import { IProduct } from "../../types/IProduct";
import { IUpdateProductReq } from "../../types/UpdateProductReq";

export const useUpdateProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [product, setProduct] = useState<IProduct>();

  const updateProduct = useCallback(async (req: IUpdateProductReq) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await putProduct(req);
      setProduct(data);
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    isError,
    updateProduct,
    product,
  };
};
