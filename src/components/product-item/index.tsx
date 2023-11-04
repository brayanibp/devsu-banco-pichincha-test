import { Product } from '@/models/product-model';
import styles from './product-item.module.css';
import Image from 'next/image';

export default function ProductItem({ logo, name, description, date_release, date_revision }: Product) {
  return (
    <tr className={styles.container}>
      <td className={styles.col}>
        <figure className={styles.logo}>
          { logo && <Image src='' alt='Logo' width={40} height={40} /> }
        </figure>
      </td>
      <td className={styles.col}>{name}</td>
      <td className={styles.col}>{description}</td>
      <td className={styles.col}>{date_release.toISOString()}</td>
      <td className={styles.col}>{date_revision.toISOString()}</td>
    </tr>
  );
}