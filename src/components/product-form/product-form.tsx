'use client';
import { ChangeEvent, FormEvent, useContext } from "react";
import style from './product-form.module.css';
import { createProduct, updateProduct } from "@/services/products-service";
import { IProduct } from "@/models/product-model";
import { TDialog } from "@/models/dialog-model";
import { ERROR_DIALOG, SUCCESS_DIALOG } from "@/consts/consts";
import { useRouter } from "next/navigation";
import { DialogDispatchContext } from "@/store/contexts/DialogContext";

interface IFormValues extends IProduct {
  [key: string]: string
}

export function ProductForm ({ title, action, product }: { title: string, action: 'create' | 'update', product?: IProduct }) {
  const router = useRouter();
  const { showDialog } = useContext(DialogDispatchContext);
  const successDialog: TDialog = {
    ...SUCCESS_DIALOG,
    action: () => {
      router.push(`/products`);
    }
  }
  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    const form = ev.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    let productForm: IFormValues = {
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: ''
    };
    formData.forEach((value: FormDataEntryValue, key) => {
      productForm[key] = value.toString();
    });
    productForm.date_release = `${productForm.date_release}T00:00:00.000+00:00`;
    productForm.date_revision = `${getNewRevisionDate(productForm.date_release)}T00:00:00.000+00:00`;
    try {
      if (action === 'create') {
        const productResponse = await createProduct(productForm);
        showDialog({ ...successDialog, description: 'El producto se ha creado correctamente' });
        return;
      }
      productForm.id = product?.id || '';
      const productResponse = await updateProduct(productForm);
      showDialog({ ...successDialog, description: 'El producto se ha actualizado correctamente' });
    } catch (error) {
      showDialog({ ...ERROR_DIALOG, description: JSON.stringify(error) });
    }
  }

  const getNewRevisionDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-').map(val => parseInt(val));
    const millisecondsDate = new Date(year+1, month - 1, day);
    const [rYear, rMonth, rDay] = millisecondsDate.toISOString().split('T')[0].split('-');
    return `${+rYear}-${rMonth}-${rDay}`;
  }

  const handleDateSelection = (event: ChangeEvent<HTMLInputElement>) => {
    const dateString = event.currentTarget.value;
    const $releaseDate = document.querySelector('#date_revision') as HTMLInputElement;
    $releaseDate.value = getNewRevisionDate(dateString);
  }

  return <form className={style.form} onSubmit={(event: FormEvent)=>onSubmit(event)}>
    <div className={style.header}>
      <h1>
        { title }
      </h1>
    </div>
    <div className={style.body}>
      <div className={style.row}>
        <div className={style.col}>
          <label htmlFor="id">ID</label>
          <input type="text" name="id" id="id" defaultValue={product?.id} disabled={action==='update'} />
        </div>
        <div className={style.col}>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" defaultValue={product?.name} />
        </div>
      </div>
      <div className={style.row}>
        <div className={style.col}>
          <label htmlFor="description">Descripción</label>
          <input type="text" name="description" id="description" defaultValue={product?.description} />
        </div>
        <div className={style.col}>
          <label htmlFor="logo">Logo</label>
          <input type="text" name="logo" id="logo" defaultValue={product?.logo} />
        </div>
      </div>
      <div className={style.row}>
        <div className={style.col}>
          <label htmlFor="date_release">Fecha Liberación</label>
          <input onChange={(event)=>handleDateSelection(event)} type="date" name="date_release" id="date_release" defaultValue={product?.date_release.split('T')[0]} />
        </div>
        <div className={style.col}>
          <label htmlFor="date_revision">Fecha Revisión</label>
          <input type="date" name="date_revision" id="date_revision" defaultValue={product?.date_revision.split('T')[0]} disabled />
        </div>
      </div>
    </div>
    <div className={style.bottom}>
      <button type="reset">Reiniciar</button>
      <button type="submit">Enviar</button>
    </div>
  </form>
}