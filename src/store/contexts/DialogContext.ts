import { INITIAL_DIALOG } from "@/consts/consts";
import { TDialog } from "@/models/dialog-model";
import { createContext } from "react";

export const DialogContext = createContext<TDialog>(INITIAL_DIALOG);
export const DialogDispatchContext = createContext<{ showDialog: Function, hideDialog: Function }>({ showDialog: () => {}, hideDialog: () => {} });