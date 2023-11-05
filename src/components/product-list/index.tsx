'use client';
import ProductItem from '@/components/product-item';
import { useProductList } from '@/hooks/useProductList';
import style from './product-list.module.css';
import { EmptyView } from '../empty-view';
import { ProductListSkeleton } from './product-list-skeleton';
import RecordsLimit from '../records-limit';
import ProductsFilter from '../products-filter';

export default function ProductList() {
  const { productList, records } = useProductList();
  const productsCards = productList?.map((item)=>{
    return <ProductItem key={item?.id || 'not-defined'} { ...(item || {}) } />;
  });
  
  return (
    <>
      <div style={{ marginBottom: 30, width: '100%', maxWidth: 1280 }}>
        <ProductsFilter  />
      </div>
      {
        !productList ? <ProductListSkeleton />
        : (
          <div className={style['table-wrapper']}>
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
                { productList && productsCards?.length ? productsCards : <tr></tr> }
              </tbody>
            </table>
            {productList && !productsCards?.length && (<EmptyView />) }
            <div style={{ padding: '40px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <strong>{records} Resultados</strong>
              <RecordsLimit></RecordsLimit>
            </div>
          </div>
        )
      }
    </>
  );
}