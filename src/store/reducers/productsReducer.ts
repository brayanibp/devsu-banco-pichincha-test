import { IProduct } from "@/models/product-model";
import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, GET_PRODUCTS, SET_PRODUTS } from "../types/productsActions";

export default function productsReducer(products: IProduct[], action: { type: string, payload: IProduct[] }) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...products,
        action.payload[0]
      ];
    case EDIT_PRODUCT:
      return products.map((product) => {
        if (product.id === action.payload[0].id) {
          return {
            ...action.payload[0]
          };
        }
        return {
          ...product,
        };
      });
    case DELETE_PRODUCT:
      return [...products.filter(product => product.id !== action.payload[0].id)];
    case GET_PRODUCTS:
      return [
        ...products
      ];
    case SET_PRODUTS:
      return [
        ...action.payload
      ];
    default: 
      return [];
  }
}