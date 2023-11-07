import { TDialog } from "@/models/dialog-model";
import { IFormConstraints } from "@/models/form-models";

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

export const [CURRENT_YEAR, CURRENT_MONTH, CURRENT_DAY] = new Date().toISOString().split('T')[0].split('-');

export const [REVISION_YEAR, REVISION_MONTH, REVISION_DAY] = new Date(Number(CURRENT_YEAR) + 1, Number(CURRENT_MONTH) - 1, Number(CURRENT_DAY)).toISOString().split('T')[0].split('-');

export const FORM_CONSTRAINTS: IFormConstraints = {
  id: {
    required: true,
    min: 3,
    max: 10,
    type: 'string'
  },
  name: {
    required: true,
    min: 5,
    max: 100,
    type: 'string'
  },
  description: {
    required: true,
    min: 10,
    max: 200,
    type: 'string'
  },
  logo: {
    required: true,
    min: 0,
    max: 0,
    type: 'string'
  },
  date_release: {
    required: true,
    type: 'date',
    since: [CURRENT_YEAR, CURRENT_MONTH, CURRENT_DAY]
  },
  date_revision: {
    required: true,
    type: 'date',
    since: [REVISION_YEAR, REVISION_MONTH, REVISION_DAY]
  }
}

export const FORM_ERROR_MESSAGES: {
  [key: string]: string
} = {
  required: '¡Este campo es requerido!',
  min: '¡Este campo requiere mínimo de {} caracteres!',
  max: '¡Este campo tiene un máximo de {} caracteres!',
  since: '¡La fecha debe ser mayor o igual a {}!'
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