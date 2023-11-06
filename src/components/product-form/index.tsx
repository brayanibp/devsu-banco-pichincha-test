'use client';
import { FormEvent } from "react";

export function ProductForm (props: { action: string }) {
  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    console.log(props.action);
  }
  const cleanForm = (event: Event) => {
    console.log(event);
    return 0;
  }
  return <form onSubmit={(event: FormEvent)=>onSubmit(event)}>
    <div>
      <h1>Formulario de Registro</h1>
    </div>
    <div>
      <div>
        <div>
          <label htmlFor=""></label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" name="" id="" />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor=""></label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" name="" id="" />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor=""></label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" name="" id="" />
        </div>
      </div>
    </div>
    <div>
      <button type="reset" onClick={()=>cleanForm}>Reiniciar</button>
      <button type="submit">Enviar</button>
    </div>
  </form>
}