'use client';
import { FormEvent } from "react";
import style from './product-form.module.css';
import { createProduct, updateProduct } from "@/services/products-service";
import { IProduct } from "@/models/product-model";

interface IFormValues extends IProduct {
  [key: string]: string
}

export function ProductForm ({ action }: { action: 'create' | 'update' }) {
  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    const form = ev.currentTarget as HTMLFormElement;
    console.log(form);
    const formData = new FormData(form);
    let product: IFormValues = {
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: ''
    };
    formData.forEach((value: FormDataEntryValue, key) => {
      product[key] = value.toString();
    });
    product.date_release = `${product.date_release}T00:00:00.000+00:00`;
    product.date_revision = `${product.date_revision}T00:00:00.000+00:00`;
    if (action === 'create') {
      const productResponse = await createProduct(product);
      return;
    }
    const productResponse = await updateProduct(product);
  }
  return <form className={style.form} onSubmit={(event: FormEvent)=>onSubmit(event)}>
    <div className={style.header}>
      <h1>Formulario de Registro</h1>
    </div>
    <div className={style.body}>
      <div className={style.row}>
        <div className={style.col}>
          <label htmlFor="id">ID</label>
          <input type="text" name="id" id="id" />
        </div>
        <div className={style.col}>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" />
        </div>
      </div>
      <div className={style.row}>
        <div className={style.col}>
          <label htmlFor="description">Descripción</label>
          <input type="text" name="description" id="description" />
        </div>
        <div className={style.col}>
          <label htmlFor="logo">Logo</label>
          <input type="text" name="logo" id="logo" />
        </div>
      </div>
      <div className={style.row}>
        <div className={style.col}>
          <label htmlFor="date_release">Fecha Liberación</label>
          <input type="date" name="date_release" id="date_release" />
        </div>
        <div className={style.col}>
          <label htmlFor="date_revision">Fecha Revisión</label>
          <input type="date" name="date_revision" id="date_revision" />
        </div>
      </div>
    </div>
    <div className={style.bottom}>
      <button type="reset">Reiniciar</button>
      <button type="submit">Enviar</button>
    </div>
  </form>
}