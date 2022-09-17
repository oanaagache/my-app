import axios from "axios";
import { IProductsPagination } from "../types/IProductsPagination";
import { IProduct } from "../types/IProduct";
import { ICreateProductReq } from "../types/ICreateProductReq";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5004",
});

export const getProducts = async () => {
  const { data } = await axiosInstance.get<IProductsPagination>("/products");
  return data.items;
};

export const getProduct = async (uuid: string) => {
  const { data } = await axiosInstance.get<IProduct>(`/products/${uuid}`);
  return data;
};

export const postProduct = async (req: ICreateProductReq) => {
  const { data } = await axiosInstance.post<{ items: IProduct[] }>(
    "/products",
    [req]
  );
  return data;
};
