import { INITIAL_PRODUCTS_LIST } from "@/consts/consts";
import { IProductsListContext } from "@/models/product-model";
import { createContext } from "react";

export const ProductsListContext = createContext<IProductsListContext>({
  productsList: INITIAL_PRODUCTS_LIST,
  records: 0,
  applyFilter: () => {}, 
  handleSearch: () => {},
  addProduct: () => {},
  editProduct: () => {},
  deleteProduct: () => {},
  getProducts: () => {},
});