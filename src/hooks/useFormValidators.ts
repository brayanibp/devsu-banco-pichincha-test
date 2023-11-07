import { EMPTY_FORM, ERROR_DIALOG, FORM_CONSTRAINTS, FORM_ERROR_MESSAGES, SUCCESS_DIALOG } from "@/consts/consts";
import { IFormConstraint, IFormStatus } from "@/models/form-models";
import { IProduct } from "@/models/product-model";
import { validateProductId } from "@/services/products-service";
import { useState } from "react";

export default function useFormValidators() {
  const [status, setStatus] = useState<IFormStatus>({
    isLoading: false,
    errors: [],
    errorsMap: EMPTY_FORM
  });

  async function validateInput(key: string, value: string, constraints: IFormConstraint) {
    try {
      let isValid = false;
      if (key === 'id') {
        isValid = await validateProductId(value);
      }
      const errors: { [key: string]: boolean } = {
        required: constraints.required && !value,
        min: false,
        max: false,
        since: false,
        valid: Boolean(constraints.valid) && !isValid
      }
      if (constraints.type === 'string') {
        errors.min = Boolean(constraints.min && constraints.min > 0 && value.length < constraints.min);
        errors.max = Boolean(constraints.max && constraints.max > 0 && value.length > constraints.max);
      }
      if (constraints.type === 'date' && constraints.since) {
        const [vYear, vMonth, vDay] = value.split('T')[0].split('-').map(Number);
        const valueDate = new Date(vYear, vMonth, vDay);
        const [cYear, cMonth, cDay] = constraints.since.map(Number);
        const sinceDate = new Date(cYear, cMonth, cDay);
        errors.since = valueDate < sinceDate;
      }
      const errorsMessages = Object.entries(errors).map(([ckey, value]) => {
        const param = (Boolean(constraints) && Boolean(constraints[ckey]) && constraints[ckey]?.toString().length === 7 ? 'ID' : constraints[ckey]?.toString().replace(/,/g, '-')) || '';
        const message = FORM_ERROR_MESSAGES[ckey].replace('{}', param);
        return {
          key: ckey, 
          value: value ? message : '' 
        };
      });
      const totalErrors = errorsMessages.reduce((errors: { key: string, value: string }[], error) => {
        if (error.value) return [...errors, error];
        return [...errors];
      }, []);
      setStatus((prev: IFormStatus) => {
        return {
          ...prev,
          errors: [
            ...prev.errors.filter((item)=> !!item[key]),
            { [key]: totalErrors[0]?.value || '' }
          ],
          errorsMap: {
            ...prev.errorsMap,
            [key]: totalErrors[0]?.value || ''
          }
        }
      });
      return totalErrors;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async function validateForm(productForm: IProduct): Promise<boolean> {
    const formErrors = Object.entries(productForm).map(([key, value]) => {
      const constraints = FORM_CONSTRAINTS[key];
      return validateInput(key, value, constraints);
    });
    return !(await Promise.all(formErrors)).some((errorsGroup) => {
      return errorsGroup.length > 0;
    });
  }

  return {
    validateForm,
    validateInput,
    formStatus: status
  }
}