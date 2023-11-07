'use client';
import style from './dialog-menu.module.css';

export default function DialogMenu({ title, description, type, payload }: { title: string, description?: string, type?: 'confirm' | 'default', payload?: Function }) {
  const closeDialog = () => {
    console.log('closing dialog');
    const dialogComponent = document.querySelector('dialog') as HTMLDialogElement;
    dialogComponent.close();
  }
  return (
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
                  if (!!payload) payload();
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
  );
}