import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useCreateProduct } from "../../../hooks/custom/useCreateProduct";
import { useCreateProductMutation } from "../../../hooks/query/useCreateProductMutation";

export const CreateProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(1);

  // const { isLoading, isError, createProduct, product } = useCreateProduct();

  const { isLoading, mutate: createProduct, data } = useCreateProductMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createProduct(
      {
        name,
        price,
        category,
      },
      {
        onSuccess: () => {
          setName("");
          setCategory("");
          setPrice(1);
        },
      }
    );
  };

  return (
    <div>
      {data?.items[0] && (
        <div>You created the product {data.items[0].name}</div>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3"
          style={{
            margin: "15px 30px 15px 30px",
          }}
        >
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="Name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          style={{
            margin: "15px 30px 15px 30px",
          }}
        >
          <Form.Label>Category:</Form.Label>
          <Form.Control
            type="Category"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          style={{
            margin: "15px 30px 15px 30px",
          }}
        >
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="Price"
            placeholder="Price"
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={() => isLoading}
          style={{
            margin: "15px 30px 15px 30px",
            backgroundColor: "#3f6d83",
          }}
        >
          Create
        </Button>
      </Form>
    </div>
  );
};
