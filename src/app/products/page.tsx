import styles from './page.module.css';
import ProductList from '@/components/product-list/product-list';

export default function Products() {
  return (
    <main className={styles.main}>
      <ProductList />
    </main>
  );
}
