export interface IProduct {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: string;
  date_revision: string;
}

export interface IProductsListContext {
  productsList: IProduct[] | null,
  records: number,
  applyFilter: Function, 
  handleSearch: Function,
  addProduct: Function,
  editProduct: Function,
  deleteProduct: Function,
  getProducts: Function,
}
