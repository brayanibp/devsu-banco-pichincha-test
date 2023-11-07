import { IProduct } from '@/models/product-model';
import style from './context-menu.module.css';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { DialogDispatchContext } from '@/store/contexts/DialogContext';
import { TDialog } from '@/models/dialog-model';

export default function ContextMenu({ product, status, toggleContextMenu }: { product: IProduct, status: 'open' | 'closed', toggleContextMenu: Function }) {
  const router = useRouter();
  const { showDialog } = useContext(DialogDispatchContext);
  const [urlParams, setUrlParams] = useState<URLSearchParams>();

  const dialog: TDialog = {
    title: `¿Estás seguro de eliminar el producto ${product.name}?`,
    status: 'open',
    description: '',
    type: 'confirm',
    action: () => {
      console.log('Eliminando producto');
    }
  }
  
  useEffect(() => {
    const myUrlParams = new URLSearchParams({
      ...product
    });
    setUrlParams(myUrlParams);
  }, [product]);

  useEffect(()=>{
    const handleClick = () => toggleContextMenu();
    if (status === 'open') document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [status, toggleContextMenu]);
  
  return (
    <>
      {
        status === 'open' && (
          <ul className={style.menu}>
            <li className={style.option}>
              <button onClick={() => {
                router.push(`/update/product?${urlParams}`);
              }}>
                Editar
              </button>
            </li>
            <li className={style.option}>
              <button onClick={() => {
                showDialog(dialog);
              }}>
                Eliminar
              </button>
            </li>
          </ul>
        )
      }
    </>
  );
}