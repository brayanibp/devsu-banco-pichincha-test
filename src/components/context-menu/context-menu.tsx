import { IProduct } from '@/models/product-model';
import style from './context-menu.module.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ContextMenu({ product, status, toggleContextMenu }: { product: IProduct, status: 'open' | 'closed', toggleContextMenu: Function }) {
  const router = useRouter();
  const [urlParams, setUrlParams] = useState<URLSearchParams>();
  
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
                router.push(`/update/product?${urlParams}`);
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