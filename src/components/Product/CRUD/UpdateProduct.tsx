import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { IProduct } from "../../../types/IProduct";
import { useUpdateProduct } from "../../../hooks/custom/useUpdateProduct";

interface IUpdateProductProps {
  product: IProduct;
}

export const UpdateProduct = ({ product }: IUpdateProductProps) => {
  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState(product.category);
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
      category,
    });
    e.preventDefault();
  };

  const style1 = {
    margin: "15px 30px 15px 30px",
  };
  return (
    <div>
      <Form onSubmit={handleUpdate}>
        <Form.Group className="mb-3" style={style1}>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="Name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>
        <Form.Group className="mb-3" style={style1}>
          <Form.Label>Category:</Form.Label>
          <Form.Control
            type="Category"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
        </Form.Group>
        <Form.Group className="mb-3" style={style1}>
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="Price"
            placeholder="Price"
            onChange={(e) => setPrice(Number(e.target.value))}
            value={price}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{
            margin: "15px 30px 15px 30px",
            backgroundColor: "#3f6d83",
          }}
        >
          Update
        </Button>
      </Form>
    </div>
  );
};
