export type TDialogStatus = 'open' | 'closed';
export type TDialogType = 'confirm' | 'default';

export type TDialog = {
  status: TDialogStatus;
  title: string;
  description: string; 
  type: TDialogType;
  action?: Function;
}
