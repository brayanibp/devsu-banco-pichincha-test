import { IProduct } from "./product-model";

export interface IFormValues extends IProduct {
  [key: string]: string
}

export interface IFormError {
  key: string;
  value: string;
}

interface IDynamicInputError {
  [key: string]: string;
}

export interface IFormStatus {
  isLoading: boolean;
  errors: IDynamicInputError[];
  errorsMap: {
    [key: string]: string;
  }
}

export interface IFormConstraint {
  required: boolean;
  type: 'string' | 'date';
  min?: number;
  max?: number;
  since?: string[]
  valid?: (boolean | string)[];
  [key: string]: string | string[] | number | boolean | (boolean | string)[] |undefined;
}

export interface IFormConstraints {
  [key: string]: IFormConstraint
}