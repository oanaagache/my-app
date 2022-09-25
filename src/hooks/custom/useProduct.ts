import { useEffect, useState } from "react";
import { getProduct } from "../../service/productService";
import { IProduct } from "../../types/IProduct";

export const useProduct = (uuid: string) => {
  const [product, setProduct] = useState<IProduct>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await getProduct(uuid);
        setProduct(data);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, [uuid]);

  return {
    isLoading,
    isError,
    product,
  };
};
