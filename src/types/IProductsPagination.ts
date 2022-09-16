import { IProduct } from "./IProduct";

export interface IProductsPagination {
  cursor: unknown;
  items: IProduct[];
  next_page: unknown;
}
