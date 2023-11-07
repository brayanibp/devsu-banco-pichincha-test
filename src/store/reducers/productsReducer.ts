import { IProduct } from "@/models/product-model";
import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, GET_PRODUCTS, SET_PRODUTS } from "../types/productsActions";

export default function productsReducer(products: IProduct[] = [], action: { type: string, payload: any }) {
  switch (action.type) {
    case ADD_PRODUCT:
      break;
    case EDIT_PRODUCT:
      break;
    case DELETE_PRODUCT:
      break;
    case GET_PRODUCTS:
      break;
    case SET_PRODUTS:
      break;
    default: 
      return [];
  }
}