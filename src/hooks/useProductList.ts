'use client';
import { IProduct } from '@/models/product-model';
import { fetchProducts } from '@/services/products-service';
import { useEffect, useState } from 'react';

export function useProductList () {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [filteredList, setFilteredList] = useState<IProduct[] | null>(null);

  const cleanText = (text: string) => {
    return text.toLowerCase().trim();
  }
  const applyFilter = (filter: string) => {
    const filterResult = products?.filter((product: IProduct) => {
      return cleanText(product.description).includes(cleanText(filter)) || cleanText(product.name).includes(cleanText(filter));
    }) || null;
    setFilteredList(filterResult);
  }

  useEffect(() => {
    fetchProducts()
      .then((res) => {
        setProducts(res);
        setFilteredList(res);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);
  return {
    productList: filteredList,
    records: filteredList?.length || 0,
    applyFilter
  }
}
