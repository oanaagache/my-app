import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import { ProductDetails } from "../components/ProductDetails";

export const Product = () => {
  const { uuid } = useParams();
  const { product, isLoading, isError } = useProduct(uuid || "");

  if (isLoading || !product) {
    return <div style={{ color: "red" }}>Loading...</div>;
  }

  if (isError) {
    return <div style={{ color: "red" }}>Error</div>;
  }
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};
