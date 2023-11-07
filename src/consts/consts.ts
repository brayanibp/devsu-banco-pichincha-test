import { TDialog } from "@/models/dialog-model";

export const API_URL = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros';
export const AUTHOR_ID = 500;
export const INITIAL_DIALOG: TDialog = { 
  status: 'closed', 
  title: '',
  description: '',
  type: 'default',
  action: () => {}
};