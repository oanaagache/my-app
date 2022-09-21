import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useCreateProduct } from "../../../hooks/custom/useCreateProduct";
import { useCreateProductMutation } from "../../../hooks/query/useCreateProductMutation";
import { useForm } from "react-hook-form";
import { ICreateProductReq } from "../../../types/ICreateProductReq";

export const CreateProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(1);

  // const { isLoading, isError, createProduct, product } = useCreateProduct(); =>
  const { isLoading, mutate: createProduct, data } = useCreateProductMutation();

  const { register, handleSubmit, reset } = useForm<ICreateProductReq>({
    defaultValues: {
      name: "",
      category: "",
      price: 1,
    },
  });

  const onSubmit = async (values: ICreateProductReq) => {
    createProduct(values, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <div>
      {data?.items[0] && (
        <div>You created the product {data.items[0].name}</div>
      )}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group
          className="mb-3"
          style={{
            margin: "15px 30px 15px 30px",
          }}
        >
          <Form.Label>Name:</Form.Label>
          <Form.Control type="Name" placeholder="Name" {...register("name")} />
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
            {...register("category")}
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
            {...register("price")}
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
