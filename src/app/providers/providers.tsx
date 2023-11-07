'use client';

import { PropsWithChildren } from "react";
import { DialogProvider } from "./dialog-provider";
import { ProductsListProvider } from "./products-provider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ProductsListProvider>
      <DialogProvider>
        { children }
      </DialogProvider>
    </ProductsListProvider>
  );
}