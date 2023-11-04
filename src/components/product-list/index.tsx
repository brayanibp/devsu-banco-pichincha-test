'use client';
import ProductItem from '@/components/product-item';
import ProductItemSkeleton from '@/components/product-item/product-item-skeleton';
import { useProductList } from '@/hooks/useProductList';
import { Suspense, useState } from 'react';
import { EmptyView } from '../empty-view';

export default function ProductList() {
  const [productsLimit, setProductsLimit] = useState(5);

  const productsSkeleton = Array(productsLimit).fill(0).map((_, index) => {
    return <ProductItemSkeleton key={index} />
  });

  const { productList } = useProductList();
  
  const productsCards = productList.map((item)=>{
    return <ProductItem key={item?.id || 'not defined'} { ...(item || {}) } />;
  });
  
  return (

    <Suspense fallback={
      <table>
        productsSkeleton
      </table>
    }>
      {
        productsCards.length ?
          <table>
            { productsCards }
          </table>
        : <EmptyView />
      }
    </Suspense>
  );
}