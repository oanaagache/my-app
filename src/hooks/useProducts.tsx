import { IProduct } from "../types/IProduct";
import { useEffect, useState } from "react";
import { getProducts } from "../service/productService";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, []);
  return {
    isLoading,
    isError,
    products,
  };
};
