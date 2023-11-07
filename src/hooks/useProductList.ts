'use client';

import { INITIAL_PRODUCTS_LIST } from '@/consts/consts';
import { IProduct } from '@/models/product-model';
import { fetchProducts } from '@/services/products-service';
import productsReducer from '@/store/reducers/productsReducer';
import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, GET_PRODUCTS, SET_PRODUTS } from '@/store/types/productsActions';
import { useEffect, useState, ChangeEvent, useReducer } from 'react';

export function useProductList () {
  const [products, dispatch] = useReducer(
    productsReducer,
    INITIAL_PRODUCTS_LIST
  );
  const [filteredList, setFilteredList] = useState<IProduct[] | null>(null);
  const [searchParam, setSearchParam] = useState<string>('');

  function setProducts(seed: IProduct[]) {
    dispatch({
      type: SET_PRODUTS,
      payload: seed
    });
  }

  function getProducts() {
    dispatch({
      type: GET_PRODUCTS,
      payload: []
    });
  }

  function addProduct(product: IProduct[]) {
    dispatch({
      type: ADD_PRODUCT,
      payload: product
    });
  }

  function editProduct(product: IProduct) {
    dispatch({
      type: EDIT_PRODUCT,
      payload: [product]
    });
  }

  function deleteProduct(product: IProduct) {
    dispatch({
      type: DELETE_PRODUCT,
      payload: [product]
    })
  }

  const cleanText = (text: string) => {
    return text.toLowerCase().trim();
  }

  const applyFilter = (filter: string) => {
    const filterResult = products?.filter((product: IProduct) => {
      return cleanText(product.description).includes(cleanText(filter)) || cleanText(product.name).includes(cleanText(filter));
    }) || null;
    setFilteredList(filterResult);
  }

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    applyFilter(value);
    setSearchParam(value);
  }

  useEffect(() => {
    fetchProducts()
      .then((res) => {
        setProducts(res);
        setFilteredList(res);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  useEffect(() => {
    const filterResult = products?.filter((product: IProduct) => {
      return cleanText(product.description).includes(cleanText(searchParam)) || cleanText(product.name).includes(cleanText(searchParam));
    }) || null;
    setFilteredList(filterResult)
  }, [products, searchParam]);

  return {
    productsList: filteredList,
    records: filteredList?.length || 0,
    applyFilter,
    handleSearch,
    getProducts,
    addProduct,
    editProduct,
    deleteProduct
  }
}
