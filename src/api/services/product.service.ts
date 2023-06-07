
import * as path from 'path';
import * as fs from 'fs';

const productsFilePath = path.join(__dirname, '../../asset.json');

const jsonData = fs.readFileSync(productsFilePath, 'utf-8');

const objectData = JSON.parse(jsonData);
const productsData = objectData.data;



type Product = {
  id: number;
  code: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  inventoryStatus: string;
  category: string;
  image?: string;
  rating?: number;
};

class ProductService {

  private writeDataToFile(data: Product[]): void {
    objectData.data = data;
    const jsonData = JSON.stringify(objectData, null, 2);
    fs.writeFile(productsFilePath, jsonData, 'utf-8', (err) => {});
  }
   
  getAllProducts(): Product[] {
    return productsData;
  }

  getProductById(id: number): Product{
    return productsData.find((product:Product) => product.id === id);
  }

  createProduct(product: Product): Product {
    const lastProductId = productsData[productsData.length - 1].id;
    const newProduct: Product = {
      ...product,
      id: lastProductId +1
    };
    productsData.push(newProduct);
    this.writeDataToFile(productsData)
    return newProduct;
  }

  updateProduct(id: number, updatedProduct: Product): Product | undefined {
    const productIndex = productsData.findIndex((product:Product) => product.id === id);

    if (productIndex !== -1) {
      const product = productsData[productIndex];
      productsData[productIndex] = {
        ...product, 
        ...updatedProduct, 
        id: product.id
      };
      this.writeDataToFile(productsData)
      return productsData[productIndex];
    }

    return undefined;
  }

  deleteProduct(id: number): Product | undefined {
    const productIndex = productsData.findIndex((product:Product) => product.id === id);

    if (productIndex !== -1) {
      const deletedProduct = productsData[productIndex];
      productsData.splice(productIndex, 1);
      this.writeDataToFile(productsData)
      return deletedProduct;
    }

    return undefined;
  }

}

export default new ProductService();