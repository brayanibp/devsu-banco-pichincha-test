'use client';
import { ProductForm } from "@/components/product-form/product-form";
import { useSearchParams } from "next/navigation";

export default function ProductPage() {
  const searchParams = useSearchParams();
  const paramObject: any = {};
  searchParams?.forEach((value, key) => {
    paramObject[key] = value;
  });
  return <ProductForm title={'Formulario de Producto'}  action="update" product={paramObject} />
}