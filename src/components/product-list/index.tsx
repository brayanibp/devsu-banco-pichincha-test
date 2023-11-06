'use client';
import ProductItem from '@/components/product-item';
import { useProductList } from '@/hooks/useProductList';
import style from './product-list.module.css';
import { EmptyView } from '../empty-view';
import { ProductListSkeleton } from './product-list-skeleton';
import RecordsLimit from '../records-limit';
import { ChangeEvent, useState } from "react";
import Link from 'next/link';

export default function ProductList() {
  const { productList, records, applyFilter } = useProductList();
  
  const productsCards = productList?.map((item)=>{
    return <ProductItem key={item?.id || 'not-defined'} { ...(item || {}) } />;
  });

  const handleTyping = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    applyFilter(value);
  }

  return (
    <>
      <div style={{ marginBottom: 30, width: '100%', maxWidth: 1280, justifyContent: 'space-between', display: 'flex' }}>
        <input className={style.search} type="text" onChange={(event) => handleTyping(event)} placeholder="Search..." />
        <Link className={style.add_button} href={'/create'}>Agregar</Link>
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
            <div className={style.list_footer}>
              <strong>{records} Resultados</strong>
              <RecordsLimit></RecordsLimit>
            </div>
          </div>
        )
      }
    </>
  );
}