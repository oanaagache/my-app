import { IProduct } from "../types/IProduct";
import * as productsActionTypes from "./productsActionTypes";

export const setProducts = (products: IProduct[]) => ({
  type: productsActionTypes.SET_PRODUCTS,
  payload: { products },
});
