import { Form, Button } from "react-bootstrap";
import { useState } from "react";
//import { useCreateProduct } from "../../../hooks/custom/useCreateProduct";
import { useCreateProductMutation } from "../../../hooks/query/useCreateProductMutation";
import { useForm } from "react-hook-form";
import { ICreateProductReq } from "../../../types/ICreateProductReq";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createProductSchema = z.object({
  name: z.string().min(3).max(10),
  category: z.string().min(3).max(10),
  price: z.string(),
});

export const CreateProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(1);

  // const { isLoading, isError, createProduct, product } = useCreateProduct(); =>
  const { isLoading, mutate: createProduct, data } = useCreateProductMutation();

  const { register, handleSubmit, reset, formState } =
    useForm<ICreateProductReq>({
      defaultValues: {
        name: "",
        category: "",
        price: 1,
      },
      mode: "onBlur",
      resolver: zodResolver(createProductSchema),
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
          <Form.Control
            type="Name"
            placeholder="Name"
            // error={formState.errors?.name?.message}
            {...register("name")}
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
            //error="blabla"
            error={formState.errors?.category?.message}
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
            // error={formState.errors?.price?.message}
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
