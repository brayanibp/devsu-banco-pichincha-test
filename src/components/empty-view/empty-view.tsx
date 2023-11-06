import style from './empty-view.module.css';

export function EmptyView() {
  return (
    <div className={style.empty_container}>
      <h2>Opps parece que está algo vacio...</h2>
    </div>
  );
}