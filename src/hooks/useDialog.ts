'use client';

import { useReducer } from "react";
import { INITIAL_DIALOG } from "@/consts/consts";
import { TDialog } from "@/models/dialog-model";
import { HIDE_DIALOG, SHOW_DIALOG } from "@/store/types/dialogActions";
import dialogReducer from "@/store/reducers/dialogReducer";

export default function useDialog() {
  const [dialog, dispatch] = useReducer(
    dialogReducer,
    INITIAL_DIALOG
  );
  
  function showDialog(dialogData: TDialog) {
    dispatch({
      type: SHOW_DIALOG,
      payload: {
        ...dialog,
        ...dialogData,
        status: 'open'
      }
    });
  }

  function hideDialog() {
    dispatch({
      type: HIDE_DIALOG,
      payload: {
        ...dialog,
        status: 'closed'
      }
    })
  }

  return {
    dialog,
    showDialog,
    hideDialog
  };
}