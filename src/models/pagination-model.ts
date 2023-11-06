import { IProduct } from "./product-model";

export interface IPagination {
  hitsPeerPage: number;
  paginationOptions: number[];
  hits: IProduct[];
  page: number;
  totalPages: number;
  fromIndex: number;
  totalRecords: number;
}