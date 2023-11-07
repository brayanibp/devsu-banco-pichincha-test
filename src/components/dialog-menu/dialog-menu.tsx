'use client';
import { useContext } from 'react';
import style from './dialog-menu.module.css';
import { DialogContext, DialogDispatchContext } from '@/store/contexts/DialogContext';
import { TDialog } from '@/models/dialog-model';

export default function DialogMenu({ title, description, type, action }: TDialog) {
  const dialog = useContext(DialogContext);
  const { hideDialog } = useContext(DialogDispatchContext);
  const closeDialog = () => {
    hideDialog();
  }
  return (
    <>
      {
        dialog.status === 'open' && (
          <div className={style.container}>
            <dialog className={style.dialog}>
              <div className={style.title}>
                <p>{ title }</p>
              </div>
              { 
                description && (
                  <div className={style.description}>
                    <p>
                      { description }
                    </p>
                  </div>
                ) 
              }
              {
                type === 'confirm' ? (
                  <div className={style.buttons}>
                    <button onClick={closeDialog} className={style.cancel}>Cancelar</button>
                    <button 
                      onClick={()=>{
                        if (!!action) action();
                        closeDialog();
                      }}
                      className={style.confirm}
                    >
                      Confirmar
                    </button>
                  </div>
                ) : (
                  <div className={style.buttons}>
                    <button onClick={closeDialog} className={style.confirm}>Confirmar</button>
                  </div>
                )
              }
            </dialog>
          </div>
        )
      }
    </>
  );
}