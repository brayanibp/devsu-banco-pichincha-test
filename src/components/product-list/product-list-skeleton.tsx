import ProductItemSkeleton from "../product-item/product-item-skeleton";
import style from './product-list.module.css';

export function ProductListSkeleton() {
  const productsSkeleton = Array(5).fill(0).map((_, index) => {
    return <ProductItemSkeleton key={index} />
  });
  return (
    <table className={style.table}>
      <thead className={style.header}>
        <tr>
          <th>Logo</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Fecha de liberación</th>
          <th>Fecha de reestructuración</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { productsSkeleton }
      </tbody>
    </table>
  )
}