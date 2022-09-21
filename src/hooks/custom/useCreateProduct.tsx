import { useCallback, useState } from "react";
import { postProduct } from "../../service/productService";
import { ICreateProductReq } from "../../types/ICreateProductReq";
import { IProduct } from "../../types/IProduct";

export const useCreateProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [product, setProduct] = useState<IProduct>();

  const createProduct = useCallback(async (req: ICreateProductReq) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await postProduct(req);
      setProduct(data.items[0]);
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    isError,
    createProduct,
    product,
  };
};
