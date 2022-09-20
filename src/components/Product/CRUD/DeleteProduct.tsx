import { Button } from "react-bootstrap";
import { useDeleteProduct } from "../../../hooks/useDeleteProduct";
import { useNavigate } from "react-router-dom";

interface DeleteProductProps {
  uuid: string;
}

export const DeleteProduct = ({ uuid }: DeleteProductProps) => {
  let navigate = useNavigate();
  const { isLoading, isError, product, removeProduct } = useDeleteProduct();
  const handleDelete = async () => {
    await removeProduct(uuid);
    navigate("/products");
  };
  return (
    <Button
      variant="danger"
      onClick={handleDelete}
      style={{
        margin: "15px 30px 15px 30px",
      }}
    >
      Delete
    </Button>
  );
};
