'use client';
import { Dispatch, SetStateAction, useState } from "react";
import style from "./records-limit.module.css";

export default function RecordsLimit({ availableLimits, setPageLimit }: { availableLimits: number[], setPageLimit: Function }) {
  const [limit, setLimit] = useState(5);
  const options = availableLimits.map((item, index) => {
    const handleClick = (value: number) => {
      setLimit(value);
      setPageLimit(value);
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