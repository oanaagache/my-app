import { Button } from "react-bootstrap";
//import { useDeleteProduct } from "../../../hooks/custom/useDeleteProduct";
import { useNavigate } from "react-router-dom";
import { useDeleteProductMutation } from "../../../hooks/mutations/useDeleteProductMutation";

interface DeleteProductProps {
  uuid: string;
}

export const DeleteProduct = ({ uuid }: DeleteProductProps) => {
  let navigate = useNavigate();
  //const { isLoading, isError, product, removeProduct } = useDeleteProduct();
  const { isLoading, isError, mutate } = useDeleteProductMutation();

  // const handleDelete = async () => {
  //   await removeProduct(uuid);
  //   navigate("/products");
  // };

  const handleDelete = () => {
    mutate(uuid);
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
