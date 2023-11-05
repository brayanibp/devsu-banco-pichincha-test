import { Product } from '@/models/product-model';
import { fetchProducts } from '@/services/products-service';
import { useEffect, useState } from 'react';

export function useProductList () {
  const [productList, setProductList] = useState<Product[] | null>(null);
  useEffect(() => {
    fetchProducts()
      .then((res) => {
        setProductList(res);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);
  return {
    productList,
    records: productList?.length || 0
  }
}
