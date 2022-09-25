import axios from "axios";
import { IProductsPagination } from "../types/IProductsPagination";
import { IProduct } from "../types/IProduct";
import { ICreateProductReq } from "../types/ICreateProductReq";
import { IUpdateProductReq } from "../types/IUpdateProductReq";

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

export const putProduct = async (req: IUpdateProductReq) => {
  const { _uuid, ...rest } = req;
  const { data } = await axiosInstance.put<IProduct>(
    `/products/${req._uuid}`,
    rest
  );
  return data;
};

export const deleteProduct = async (uuid: string) => {
  const { data } = await axiosInstance.delete<IProduct>(`/products/${uuid}`);
  return data;
};
