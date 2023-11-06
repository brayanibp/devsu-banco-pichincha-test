import Link from 'next/link';
import style from './navbar.module.css';

export function Navbar () {
  return <nav className={style.nav}>
    <Link href={'/products'}>
      <span className={style.box}>
        <span className={style.edge}></span>
      </span>
      BANCO
      <br />
      PICHINCHA
    </Link>
  </nav>
}