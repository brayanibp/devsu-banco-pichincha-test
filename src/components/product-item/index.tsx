import { IProduct } from '@/models/product-model';
import styles from './product-item.module.css';
import Image from 'next/image';

export default function ProductItem({ logo, name, description, date_release, date_revision }: IProduct) {
  return (
    <tr className={styles.row}>
      <td className={styles.col}>
        <figure className={styles.logo}>
          { logo && <Image src={ ("/assets/dummy_60x60_C0C7D9_C0C7D9.png") } alt='Product Logo' width={50} height={50} /> }
        </figure>
      </td>
      <td className={styles.col}>{name}</td>
      <td className={styles.col}>{description}</td>
      <td className={styles.col}>{date_release}</td>
      <td className={styles.col}>{date_revision}</td>
      <td className={styles.col}><Image src="/assets/menu.png" alt="menu" width={24} height={24} /></td>
    </tr>
  );
}