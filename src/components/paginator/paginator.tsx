import style from './paginator.module.css';

export default function Paginator(
  { 
    goBack, 
    goNext, 
    totalPages, 
    currentPage 
  }: 
  { 
    goBack: Function, 
    goNext: Function, 
    totalPages: number, 
    currentPage: number 
  }
) {
  return (
    <ul className={style.paginator}>
      <li className={style.back}>
        <button onClick={()=>goBack()}>
          <span></span>
        </button>
      </li>
      <li className={style.page}>{currentPage || 0} / {totalPages || 0}</li>
      <li className={style.next}>
        <button onClick={()=>goNext()}>
          <span></span>
        </button>
      </li>
    </ul>
  )
}