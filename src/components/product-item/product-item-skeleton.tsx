import styles from './product-item.module.css';
import Image from 'next/image';

export default function ProductItemSkeleton() {
  return (
    <tr className='skeleton wrapper'>
      <td className={styles.col}>
        <figure className='skeleton logo'>
          <div className='shimmer-wrapper'>
            <div className='shimmer'></div>
          </div>
        </figure>
      </td>
      <td className={styles.col}>
        <div className='skeleton short text'>
          <div className='shimmer-wrapper'>
            <div className='shimmer'></div>
          </div>
        </div>
      </td>
      <td className={styles.col}>
        <div className='skeleton long text'>
          <div className='shimmer-wrapper'>
            <div className='shimmer'></div>
          </div>
        </div>
      </td>
      <td className={styles.col}>
        <div className='skeleton short text'>
          <div className='shimmer-wrapper'>
            <div className='shimmer'></div>
          </div>
        </div>
      </td>
      <td className={styles.col}>
        <div className='skeleton short text'>
          <div className='shimmer-wrapper'>
            <div className='shimmer'></div>
          </div>
        </div>
      </td>
      <td className={styles.col}><Image src="/assets/menu.png" alt="menu" width={24} height={24} /></td>
    </tr>
  );
}