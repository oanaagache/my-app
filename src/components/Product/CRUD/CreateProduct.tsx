import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useCreateProduct } from "../../../hooks/useCreateProduct";

export const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const { isLoading, isError, createProduct, product } = useCreateProduct();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createProduct({
      name,
      price,
    });
    setName("");
    setPrice(1);
  };

  return (
    <div>
      {product && <div>You created the product {product.name}</div>}
      <Form onSubmit={handleSubmit}>
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
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={() => isLoading}>
          Create
        </Button>
      </Form>
    </div>
  );
};
