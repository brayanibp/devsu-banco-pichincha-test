import ProductItem from '@/components/product-item';
import styles from './page.module.css';
import ProductItemSkeleton from '@/components/product-item/product-item-skeleton';
import ProductList from '@/components/product-list';

export default function Home() {
  return (
    <main className={styles.main}>
      <ProductList />
    </main>
  );
}
