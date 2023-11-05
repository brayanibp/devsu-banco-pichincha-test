import { ChangeEvent, useState } from "react";
import style from './products-filter.module.css';

export default function ProductFilter() {
  const [filter, setFilter] = useState('');
  const handleTyping = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.currentTarget.value);
    console.log(event.currentTarget.value, filter);
  }
  return (
    <>
      <input className={style.search} type="text" onChange={(event) => handleTyping(event)} placeholder="Search..." />
    </>
  );
}