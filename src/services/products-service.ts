import { API_URL, AUTHOR_ID } from "@/consts/consts";
import { Product } from "@/models/product-model";

async function fetchProducts(): Promise<Product[]> {
  const result = await fetch(`${API_URL}/bp/products`, {
    headers: {
      authorId: '500'
    }
  });
  const products = await result.json();
  return products;
}

async function createProduct(): Promise<Product[]> {
  const productId = crypto.randomUUID();
  const releaseDate = new Date().toISOString();
  const newProduct: Product = {
    id: productId,
    name: 'Tarjetas de Credito',
    description: 'Tarjeta de consumo bajo la modalidad de credito',
    date_release: releaseDate,
    date_revision: releaseDate,
    logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg"
  };
  const formData = new FormData();
  formData.set('name', newProduct.name || '');
  formData.set('description', newProduct.description || '');

  try {
    const result = await fetch(`${API_URL}/bp/products`, {
      method: 'POST',
      headers: {
        authorId: `${AUTHOR_ID}`,
        'content-type': 'application/json'
      },
      body: formData
    });
    const products = await result.json();
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
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