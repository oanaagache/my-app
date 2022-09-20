import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { IProduct } from "../../../types/IProduct";
import { useUpdateProduct } from "../../../hooks/useUpdateProduct";

interface IUpdateProductProps {
  product: IProduct;
}

export const UpdateProduct = ({ product }: IUpdateProductProps) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const {
    isLoading,
    isError,
    updateProduct,
    product: updatedProduct,
  } = useUpdateProduct();

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    updateProduct({
      _uuid: product._uuid,
      name,
      price,
    });
    e.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={handleUpdate}>
        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="Name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="Price"
            placeholder="Price"
            onChange={(e) => setPrice(Number(e.target.value))}
            value={price}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};
