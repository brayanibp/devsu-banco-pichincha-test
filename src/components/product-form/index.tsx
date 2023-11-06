'use client';
import { FormEvent } from "react";
import style from './product-form.module.css';

interface IFormValues {
  [key: string]: string
}

export function ProductForm ({ action }: { action: 'create' | 'update' }) {
  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const form = ev.currentTarget as HTMLFormElement;
    console.log(form);
    const formData = new FormData(form);
    console.log(formData.entries());
    let product: IFormValues = {};
    formData.forEach((value: FormDataEntryValue, key) => {
      product[key] = value.toString();
    })
    console.log(product);
  }
  const cleanForm = () => {
    return 0;
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
      <button type="reset" onClick={()=>cleanForm}>Reiniciar</button>
      <button type="submit">Enviar</button>
    </div>
  </form>
}