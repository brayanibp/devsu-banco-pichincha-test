'use client';

import { useProductList } from "@/hooks/useProductList";
import { ProductsListContext } from "@/store/contexts/ProductsListContext";
import { PropsWithChildren } from "react";

export function ProductsListProvider({ children }: PropsWithChildren) {
  const { productsList, records, addProduct, editProduct, deleteProduct, getProducts, applyFilter, handleSearch } = useProductList();
  return (
    <ProductsListContext.Provider value={{ productsList, records, addProduct, editProduct, deleteProduct, getProducts, applyFilter, handleSearch }}>
      { children }
    </ProductsListContext.Provider>
  );
}