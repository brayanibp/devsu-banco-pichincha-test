import { IProduct } from '@/models/product-model';
import style from './context-menu.module.css';
import { useState } from 'react';

export default function ContextMenu({ product, status }: { product: IProduct, status: string }) {
  return (
    <>
      {
        status === 'open' && (
          <ul className={style.menu}>
            <li className={style.option}>Editar</li>
            <li className={style.option}>Eliminar</li>
          </ul>
        )
      }
    </>
  );
}