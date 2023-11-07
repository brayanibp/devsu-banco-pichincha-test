'use client';
import { ChangeEvent, FormEvent, useContext } from "react";
import style from './product-form.module.css';
import { createProduct, updateProduct } from "@/services/products-service";
import { IProduct } from "@/models/product-model";
import { TDialog } from "@/models/dialog-model";
import { EMPTY_FORM, ERROR_DIALOG, FORM_CONSTRAINTS, SUCCESS_DIALOG } from "@/consts/consts";
import { useRouter } from "next/navigation";
import { DialogDispatchContext } from "@/store/contexts/DialogContext";
import { IFormValues } from "@/models/form-models";
import useFormValidators from "@/hooks/useFormValidators";

export function ProductForm ({ title, action, product }: { title: string, action: 'create' | 'update', product?: IProduct }) {
  const router = useRouter();
  const { showDialog } = useContext(DialogDispatchContext);
  const { formStatus, validateForm, validateInput } = useFormValidators();

  const successDialog: TDialog = {
    ...SUCCESS_DIALOG,
    action: () => {
      router.replace('/products');
    }
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const form = ev.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    let productForm: IFormValues = EMPTY_FORM;
    formData.forEach((value: FormDataEntryValue, key) => {
      productForm[key] = value.toString();
    });
    const fallbackDate = new Date();
    fallbackDate.setDate(fallbackDate.getDate() - 1);
    const fallbackDateValue = fallbackDate.toISOString().split('T')[0];
    productForm.date_release = `${productForm.date_release || fallbackDateValue }T00:00:00.000+00:00`;
    productForm.date_revision = `${getNewRevisionDate(productForm.date_release || fallbackDateValue)}T00:00:00.000+00:00`;
    try {
      if (action === 'create' && validateForm(productForm)) {
        const productResponse = await createProduct(productForm);
        showDialog({ ...successDialog, description: 'El producto se ha creado correctamente' });
        return;
      }
      productForm.id = product?.id || '';
      if (validateForm(productForm)) {
        const productResponse = await updateProduct(productForm);
        showDialog({ ...successDialog, description: 'El producto se ha actualizado correctamente' });
      }
    } catch (error) {
      showDialog({ ...ERROR_DIALOG, description: JSON.stringify(error) });
    }
  }

  function getNewRevisionDate(dateString: string) {
    const [year, month, day] = dateString.split('-').map(val => parseInt(val));
    const revisionDate = new Date(year+1, month - 1, day);
    const [rYear, rMonth, rDay] = revisionDate.toISOString().split('T')[0].split('-');
    return `${+rYear}-${rMonth}-${rDay}`;
  }

  function handleDateSelection(event: ChangeEvent<HTMLInputElement>) {
    const target = event.currentTarget;
    const key = target.getAttribute('name')!;
    const value = target.value;
    const constraints = FORM_CONSTRAINTS[key];
    validateInput(key, value, constraints);
    const $releaseDate = document.querySelector('#date_revision') as HTMLInputElement;
    $releaseDate.value = getNewRevisionDate(value);
  }

  function handleTyping(event: ChangeEvent<HTMLInputElement>) {
    const target = event.currentTarget;
    const key = target.getAttribute('name')!;
    const value = target.value;
    const constraints = FORM_CONSTRAINTS[key];
    validateInput(key, value, constraints);
  }

  return <form className={style.form} onSubmit={(event: FormEvent)=>onSubmit(event)}>
    <div className={style.header}>
      <h1>
        { title }
      </h1>
    </div>
    <div className={style.body}>
      <div className={style.row}>
        <div className={`${style.col} ${formStatus.errorsMap['id'] ? style.error : ''}`}>
          <label htmlFor="id">ID</label>
          <input onChange={handleTyping} type="text" name="id" id="id" defaultValue={product?.id} disabled={action==='update'} />
          <span>{formStatus.errorsMap['id']}</span>
        </div>
        <div className={`${style.col} ${formStatus.errorsMap['name'] ? style.error : ''}`}>
          <label htmlFor="name">Nombre</label>
          <input onChange={handleTyping} type="text" name="name" id="name" defaultValue={product?.name} />
          <span>{formStatus.errorsMap['name']}</span>
        </div>
      </div>
      <div className={style.row}>
        <div className={`${style.col} ${formStatus.errorsMap['description'] ? style.error : ''}`}>
          <label htmlFor="description">Descripción</label>
          <input onChange={handleTyping} type="text" name="description" id="description" defaultValue={product?.description} />
          <span>{formStatus.errorsMap['description']}</span>
        </div>
        <div className={`${style.col} ${formStatus.errorsMap['logo'] ? style.error : ''}`}>
          <label htmlFor="logo">Logo</label>
          <input onChange={handleTyping} type="text" name="logo" id="logo" defaultValue={product?.logo} />
          <span>{formStatus.errorsMap['logo']}</span>
        </div>
      </div>
      <div className={style.row}>
        <div className={`${style.col} ${formStatus.errorsMap['date_release'] ? style.error : ''}`}>
          <label htmlFor="date_release">Fecha Liberación</label>
          <input onChange={(event)=>handleDateSelection(event)} type="date" name="date_release" id="date_release" defaultValue={product?.date_release.split('T')[0]} />
          <span>{formStatus.errorsMap['date_release']}</span>
        </div>
        <div className={`${style.col} ${formStatus.errorsMap['date_revision'] ? style.error : ''}`}>
          <label htmlFor="date_revision">Fecha Revisión</label>
          <input type="date" name="date_revision" id="date_revision" defaultValue={product?.date_revision.split('T')[0]} disabled />
          <span>{formStatus.errorsMap['date_revision']}</span>
        </div>
      </div>
    </div>
    <div className={style.bottom}>
      <button type="reset">Reiniciar</button>
      <button type="submit">Enviar</button>
    </div>
  </form>
}