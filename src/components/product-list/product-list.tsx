'use client';

import ProductItem from '@/components/product-item/product-item';
import style from './product-list.module.css';
import { EmptyView } from '../empty-view/empty-view';
import { ProductListSkeleton } from './product-list-skeleton';
import RecordsLimit from '../records-limit/records-limit';
import Link from 'next/link';
import usePagination from '@/hooks/usePagination';
import Paginator from '../paginator/paginator';
import { useContext } from 'react';
import { ProductsListContext } from '@/store/contexts/ProductsListContext';
import SearchBar from '../search-bar/search-bar';

export default function ProductList() {
  const { productsList, records } = useContext(ProductsListContext);
  const { pagination, setPageLimit, goBack, goNext } = usePagination();
  
  const productsRows = pagination.hits?.map((item)=>{
    return <ProductItem key={item?.id || 'not-defined'} { ...(item || {}) } />;
  });

  return (
    <>
      <div style={{ marginBottom: 30, width: '100%', maxWidth: 1280, justifyContent: 'space-between', display: 'flex' }}>
        <SearchBar />
        <Link className={style.add_button} href={'/create'}>Agregar</Link>
      </div>
      {
        !productsList ? <ProductListSkeleton />
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
                { productsList && productsRows?.length ? productsRows : <tr></tr> }
              </tbody>
            </table>
            {productsList && !productsRows?.length && (<EmptyView />) }
            <div className={style.footer}>
              <div>
                <strong>{records} Resultados</strong>
              </div>
              <div>
                <Paginator totalPages={pagination.totalPages} currentPage={pagination.page} goBack={goBack} goNext={goNext} />
              </div>
              <div>
                <RecordsLimit availableLimits={pagination.paginationOptions} setPageLimit={setPageLimit}></RecordsLimit>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}