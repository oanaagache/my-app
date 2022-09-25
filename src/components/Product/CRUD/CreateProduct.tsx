import { Button } from "react-bootstrap";
//import { useState } from "react";
//import { useCreateProduct } from "../../../hooks/custom/useCreateProduct";
import { useCreateProductMutation } from "../../../hooks/mutations/useCreateProductMutation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createProductSchema = z.object({
  name: z.string().min(3, "Name too short").max(20),
  category: z.string().min(3).max(20),
  price: z.string().refine((val) => Number(val) >= 1, {
    message: "Price must be greater than equal to 1",
  }),
});

type FormFields = z.infer<typeof createProductSchema>;

export const CreateProduct = () => {
  // const [name, setName] = useState("");
  // const [category, setCategory] = useState("");
  // const [price, setPrice] = useState(1);

  // const { isLoading, isError, createProduct, product } = useCreateProduct(); =>
  const { isLoading, mutate: createProduct, data } = useCreateProductMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      name: "",
      category: "",
      price: "1",
    },
    mode: "onBlur",
    resolver: zodResolver(createProductSchema),
  });

  //resolver -connection zod-useForm hook

  const onSubmit = async (values: FormFields) => {
    const { price, ...rest } = values;
    // createProduct(
    // { name,price,category}
    //values, {
    //   onSuccess: () => {
    //     setTitle("");
    //     setCategory("");
    //     setPrice(1);
    //   },
    // });

    createProduct(
      { price: Number(price), ...rest },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  const style = {
    margin: " 20px 0 0 0",
  };
  const style1 = {
    margin: " 0 0 0 30px",
  };
  const style2 = {
    borderRadius: "10px",
    margin: " 10px 200px 10px 32px",
    weight: "800px",
  };
  const style3 = {
    borderRadius: "10px",
    margin: " 10px 200px 10px 8px",
  };
  const style4 = {
    borderRadius: "10px",
    margin: " 10px 200px 10px 38px",
  };
  const style5 = {
    margin: " 0 0 0 30px",
    color: "red",
  };

  return (
    <div>
      {data?.items[0] && (
        <div style={style5}>
          You created the product <em>{data.items[0].name}</em>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={style}>
          <label style={style1}>Name:</label>
          <input
            style={style2}
            type="Name"
            placeholder="Name"
            {...register("name")}
          />
          <p style={style5}>{errors.name?.message} </p>
        </div>

        <div>
          <label style={style1}>Category:</label>
          <input
            style={style3}
            type="Category"
            placeholder="Category"
            {...register("category")}
          />
          <p style={style5}>{errors.category?.message}</p>
        </div>

        <div>
          <label style={style1}>Price:</label>
          <input
            style={style4}
            type="Price"
            placeholder="Price"
            {...register("price")}
          />
          <p style={style5}>{errors.price?.message}</p>
        </div>

        <Button
          variant="primary"
          type="submit"
          onClick={() => isLoading}
          style={{
            margin: "30px ",
            backgroundColor: "#3f6d83",
          }}
        >
          Create
        </Button>
      </form>
    </div>
  );
};
