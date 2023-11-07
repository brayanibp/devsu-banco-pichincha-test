'use client';

import DialogMenu from "@/components/dialog-menu/dialog-menu";
import useDialog from "@/hooks/useDialog";
import { DialogContext, DialogDispatchContext } from "@/store/contexts/DialogContext";
import { PropsWithChildren } from "react";

export function DialogProvider({ children }: PropsWithChildren) {
  const { dialog, showDialog, hideDialog } = useDialog();
  return (
    <DialogContext.Provider value={dialog}>
      <DialogDispatchContext.Provider value={{ showDialog, hideDialog }}>
        <DialogMenu {...dialog} />
        { children }
      </DialogDispatchContext.Provider>
    </DialogContext.Provider>
  );
}