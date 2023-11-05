'use client';
import ProductItem from '@/components/product-item';
import { useProductList } from '@/hooks/useProductList';
import style from './product-list.module.css';
import { EmptyView } from '../empty-view';
import { ProductListSkeleton } from './product-list-skeleton';

export default function ProductList() {
  const { productList } = useProductList();
  
  const productsCards = productList?.map((item)=>{
    return <ProductItem key={item?.id || 'not-defined'} { ...(item || {}) } />;
  });
  
  return (
    <>
      {
        !productsCards.length ? <ProductListSkeleton />
        : (
          <table className={style.table}>
            <thead className={style.header}>
              <tr>
                <th>Logo</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Fecha de liberación</th>
                <th>Fecha de reestructuración</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { productsCards  }
            </tbody>
          </table>
        )
      }
    </>
  );
}