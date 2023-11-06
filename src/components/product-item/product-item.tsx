import { IProduct } from '@/models/product-model';
import styles from './product-item.module.css';
import Image from 'next/image';
import ContextMenu from '../context-menu/context-menu';
import { useState } from 'react';

export default function ProductItem({ id, logo, name, description, date_release, date_revision }: IProduct) {
  const [contextMenuStatus, setContextMenuStatus] = useState('closed');
  const openContextMenu = ({ id, logo, name, description, date_release, date_revision }: IProduct) => {
    setContextMenuStatus((prev: string)=> {
      if (prev === 'open') return 'closed';
      else return 'open';
    });
  }
  return (
    <tr className={styles.row}>
      <td className={styles.col}>
        <figure className={styles.logo}>
          { logo && <Image src={ ("/assets/dummy_60x60_C0C7D9_C0C7D9.png") } alt='Product Logo' width={50} height={50} /> }
        </figure>
      </td>
      <td className={styles.col}>{name}</td>
      <td className={styles.col}>{description}</td>
      <td className={styles.col}>{date_release.split('T')[0]}</td>
      <td className={styles.col}>{date_revision.split('T')[0]}</td>
      <td className={styles.col}>
        <ContextMenu product={{ id, logo, name, description, date_release, date_revision }} status={contextMenuStatus} />
        <button className={styles.button} onClick={()=>openContextMenu({ id, logo, name, description, date_release, date_revision })}>
          <Image src="/assets/menu.png" alt="menu" width={24} height={24} />
        </button>
      </td>
    </tr>
  );
}