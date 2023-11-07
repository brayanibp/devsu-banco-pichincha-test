import { ProductsListContext } from "@/store/contexts/ProductsListContext";
import { useContext } from "react";
import style from './search-bar.module.css';

export default function SearchBar() {
  const { handleSearch } = useContext(ProductsListContext);
  return <input className={style.search} type="text" onChange={(event) => handleSearch(event)} placeholder="Search..." />;
}