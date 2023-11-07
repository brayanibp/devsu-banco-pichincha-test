import { IProduct } from "./product-model";

export interface IFormValues extends IProduct {
  [key: string]: string
}

export interface IFormError {
  key: string;
  value: string;
}

export interface IFormStatus {
  isLoading: boolean;
  hasError: boolean;
  errors: IFormError[]
}