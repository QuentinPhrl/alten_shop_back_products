import { Request, Response, ErrorRequestHandler } from 'express';
import ProductService from '../services/product.service';


class ProductController {

    getAllProducts(req: Request, res: Response): void {
        try {
          const products = ProductService.getAllProducts();
          res.json(products);
        } catch (error) {
          res.status(500).json({ Error: 'Internal Server Error'});
        }
      }
  
    getProductById(req: Request, res: Response): void {
        try {
          const productId = Number(req.params.id);
          const product = ProductService.getProductById(productId);
    
          if (product) {
            res.json(product);
          } else {
            res.status(404).json({ Error: 'Product not found' });
          }
        } catch (error) {
          res.status(500).json({ Error: 'Internal Server Error' });
        }
      }

    createProduct(req: Request, res: Response): void {
        try {
          const productData = req.body;
          const createdProduct = ProductService.createProduct(productData);
          res.status(201).json(createdProduct);
        } catch (error) {
          res.status(500).json({ Error: 'Internal Server Error'});
        }
      }
    
    updateProduct(req: Request, res: Response): void {
        try {
          const productId = Number(req.params.id);
          const updatedProduct = ProductService.updateProduct(productId, req.body);
    
          if (updatedProduct) {
            res.status(200).json(updatedProduct);
          } else {
            res.status(404).json({ Error: 'Product not found' });
          }
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error'});
        }
      }
    
    deleteProduct(req: Request, res: Response): void {
        try {
          const productId = Number(req.params.id);
          const deletedProduct = ProductService.deleteProduct(productId);
    
          if (deletedProduct) {
            res.status(200).json({ message: 'Product deleted successfully' });
          } else {
            res.status(404).json({ Error: 'Product not found' });
          }
        } catch (err) {
          res.status(500).json({ Error: `Unable to delete resource` });
        }
      }  

  }

export default new ProductController;