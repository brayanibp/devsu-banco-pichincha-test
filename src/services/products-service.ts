import { API_URL, AUTHOR_ID } from "@/consts/consts";
import { Product } from "@/models/product-model";

async function fetchProducts(): Promise<Product[]> {
  const result = await fetch(`${API_URL}/bp/products`, {
    headers: {
      authorId: `${AUTHOR_ID}`
    } 
  });
  const products = await result.json();
  return products;
}

async function createProduct() {

}

async function updateProduct() {

}

async function deleteProduct() {
  
}

export {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct
}