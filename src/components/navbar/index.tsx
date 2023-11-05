import style from './navbar.module.css';

export function Navbar () {
  return <nav className={style.nav}>
    <div>
      <span className={style.box}>
        <span className={style.edge}></span>
      </span>
      BANCO
      <br />
      PICHINCHA
    </div>
  </nav>
}