import { API_URL, AUTHOR_ID } from "@/consts/consts";
import { IProduct } from "@/models/product-model";

async function fetchProducts(): Promise<IProduct[]> {
  const result = await fetch(`${API_URL}/bp/products`, {
    headers: {
      authorId: '500'
    }
  });
  const products = await result.json();
  return products;
}

async function createProduct(productData: IProduct): Promise<IProduct> {
  try {
    const result = await fetch(`${API_URL}/bp/products`, {
      method: 'POST',
      headers: {
        "authorId": `${AUTHOR_ID}`,
        "content-type": "application/json"
      },
      body: JSON.stringify(productData)
    });
    if (result.status !== 200) throw await result.text();
    const product = await result.json();
    return product;
  } catch (error) {
    console.error(error);
    return {
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: ''
    };
  }
}

async function updateProduct(productData: IProduct) {
  try {
    const result = await fetch(`${API_URL}/bp/products`, {
      method: 'PUT',
      headers: {
        "authorId": `${AUTHOR_ID}`,
        "content-type": "application/json"
      },
      body: JSON.stringify(productData)
    });
    if (result.status !== 200) throw await result.text();
    const product = await result.json();
    return product;
  } catch (error) {
    console.error(error);
    return {
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: ''
    };
  }
}

async function deleteProduct(productData: IProduct) {
  try {
    const result = await fetch(`${API_URL}/bp/products`, {
      method: 'DELETE',
      headers: {
        "authorId": `${AUTHOR_ID}`,
        "content-type": "application/json"
      },
      body: JSON.stringify(productData)
    });
    if (result.status !== 200) throw await result.text();
    const product = await result.json();
    return product;
  } catch (error) {
    console.error(error);
    return {
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: ''
    };
  }
}

export {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct
}