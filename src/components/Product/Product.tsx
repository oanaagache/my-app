import { useParams } from "react-router-dom";
//import { useProduct } from "../../hooks/useProduct";
import { ProductDetails } from "./ProductDetails";
import { UpdateProduct } from "./CRUD/UpdateProduct";
import { DeleteProduct } from "./CRUD/DeleteProduct";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useProductQuery } from "../../hooks/queries/useProductQuery";

export const Product = () => {
  let navigate = useNavigate();
  const { uuid } = useParams();
  // const { isLoading, isError, product } = useProduct(uuid || "");
  const { isLoading, isError, data: product } = useProductQuery(uuid || "");

  if (isLoading || !product) {
    return <div style={{ color: "red" }}>Loading...</div>;
  }

  if (isError) {
    return <div style={{ color: "red" }}>Error</div>;
  }
  return (
    <div
      className="d-flex justify-content-between"
      style={{
        backgroundColor: "#f1ededbe",
        padding: "15px",
        margin: "15px",
        borderRadius: "15px",
      }}
    >
      <div
        style={{
          margin: "0 15px 60px 0",
          flex: 1,
        }}
      >
        <ProductDetails product={product} />
      </div>

      <div
        style={{
          backgroundColor: "#f1ededbe",
          borderRadius: "15px",
          margin: "60px 90px 60px 15px",
          flex: 2,
        }}
      >
        <div
          style={{
            margin: "30px 30px 30px 15px",
          }}
        >
          <UpdateProduct product={product} />
          <DeleteProduct uuid={product._uuid} />
        </div>
      </div>
      <Button
        style={{
          position: "absolute",
          top: "120px",
          right: "50px",
          fontSize: "15px",
          cursor: "pointer",
          backgroundColor: "#3f6d83",
        }}
        onClick={() => {
          navigate("/products");
        }}
      >
        &times;
      </Button>
    </div>
  );
};
