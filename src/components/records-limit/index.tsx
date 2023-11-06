'use client';
import { useState } from "react";
import style from "./records-limit.module.css";

export default function RecordsLimit() {
  const [limit, setLimit] = useState(5);
  const availableLimits = [5, 10, 20];
  const options = availableLimits.map((item, index) => {
    const handleClick = (value: number) => {
      setLimit(value);
    }
    return <li key={index} className={style.option} onClick={()=>handleClick(item)}>{item}</li>
  })
  return (
    <ul className={style.box}>
      <li className={style.selected}>{limit} <span className={style.arrow}></span></li>
      <div className={style.options}>
        {options}
      </div>
    </ul>
  );
}