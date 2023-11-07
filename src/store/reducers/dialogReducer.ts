import { TDialog } from "@/models/dialog-model";
import { HIDE_DIALOG, SHOW_DIALOG } from "../types/dialogActions";


export default function dialogReducer(dialog: TDialog, action: { type: string, payload: TDialog }): TDialog {
  switch (action.type) {
    case SHOW_DIALOG:
      return {
        ...dialog,
        ...action.payload,
        status: 'open',
      };
    case HIDE_DIALOG:
      return { 
        ...dialog,
        status: 'closed',
      };
    default: 
      return {
        ...dialog
      };
  }
}