'use client';

import { IPagination } from "@/models/pagination-model";
import { ProductsListContext } from "@/store/contexts/ProductsListContext";
import { useContext, useEffect, useState } from "react";

export default function usePagination() {
  const { productsList } = useContext(ProductsListContext);
  const [hitsPeerPage, setHitsPeerPage] = useState(5);
  const [pagination, setPagination] = useState<IPagination>({
    hitsPeerPage: 5,
    paginationOptions: [5, 10, 20],
    hits: [],
    page: 1,
    totalPages: 1,
    fromIndex: 0,
    totalRecords: 0
  });
  
  useEffect(() => {
    // controlling the times it renders when filtered products list change
    const task = setTimeout(() => {
      setPagination((prev: IPagination) => {
        return {
          ...prev,
          hitsPeerPage: hitsPeerPage,
          totalRecords: productsList?.length || 0,
          totalPages: Math.ceil((productsList?.length || 0) / hitsPeerPage),
          hits: [
            ...(productsList?.slice(0, hitsPeerPage) || [])
          ],
          page: 1,
          fromIndex: 0
        }
      });
    }, 0);
    return () => {
      // clearing task if useEffect renders again while executing previous task
      clearTimeout(task);
    }
  }, [productsList, hitsPeerPage]);

  const setPageLimit = (value: number) => {
    setHitsPeerPage(value);
  }

  const goBack = () => {
    setPagination((prev: IPagination) => {
      if (pagination.page <= 1) return { ...prev };
      return {
        ...prev,
        page: pagination.page - 1,
        fromIndex: pagination.fromIndex - pagination.hitsPeerPage,
        hits: productsList?.slice(pagination.fromIndex - pagination.hitsPeerPage, hitsPeerPage) || []
      }
    });
  }

  const goNext = () => {
    setPagination((prev: IPagination) => {
      if (pagination.page >= pagination.totalPages) return { ...prev };
      return {
        ...prev,
        page: pagination.page + 1,
        fromIndex: pagination.fromIndex + pagination.hitsPeerPage,
        hits: [...productsList?.slice(pagination.fromIndex + pagination.hitsPeerPage, hitsPeerPage * (pagination.page + 1)) || []]
      }
    });
  }

  return {
    setPageLimit,
    pagination,
    goBack,
    goNext
  }
}