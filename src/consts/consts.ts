import { TDialog } from "@/models/dialog-model";

export const API_URL = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros';
export const AUTHOR_ID = 500;

export const EMPTY_FORM = {
  id: '',
  name: '',
  description: '',
  logo: '',
  date_release: '',
  date_revision: ''
}

export const INITIAL_DIALOG: TDialog = { 
  status: 'closed', 
  title: '',
  description: '',
  type: 'default',
  action: () => {}
};

export const SUCCESS_DIALOG: TDialog = {
  status: 'open',
  title: 'Operación exitosa',
  description: '',
  type: 'default',
  action: undefined
};

export const ERROR_DIALOG: TDialog = {
  status: 'open',
  title: 'Ha ocurrido un error',
  description: '',
  type: 'default',
  action: undefined
};