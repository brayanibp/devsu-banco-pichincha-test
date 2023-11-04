import styles from './product-item.module.css';

export default function ProductItemSkeleton() {
  return (
    <tr className={`${styles.container} skeleton wrapper`}>
      <td className={styles.col}>
        <figure className='skeleton logo'>
        </figure>
      </td>
      <td className={styles.col}>
        <div className='skeleton short text'></div>
      </td>
      <td className={styles.col}>
        <div className='skeleton long text'></div>
      </td>
      <td className={styles.col}>
        <div className='skeleton long text'></div>
      </td>
      <td className={styles.col}>
        <div className='skeleton short text'></div>
      </td>
      <td className={styles.col}>
        <div className='skeleton short text'></div>
      </td>
      <td className={styles.col}>
        <div className='skeleton short text'></div>
      </td>
      <td className={styles.col}>
        <div className='skeleton short text'></div>
      </td>
      <div className='shimmer-wrapper'>
        <div className='shimmer'></div>
      </div>
    </tr>
  );
}