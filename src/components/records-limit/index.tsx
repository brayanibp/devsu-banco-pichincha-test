import { useState } from "react";

export default function RecordsLimit() {
  const [limit, setLimit] = useState(5);
  const availableLimits = [5, 10, 20];
  const options = availableLimits.map((item, index) => {
    const handleClick = (value: number) => {
      setLimit(value);
    }
    return <li key={index} onClick={()=>handleClick(item)}>{item}</li>
  })
  return (
    <ul>
      <li>{limit}</li>
      {options}
    </ul>
  );
}