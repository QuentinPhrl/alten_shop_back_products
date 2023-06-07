import { Router } from 'express';
import ProductController from '../controllers/product.controller';


const productRoutes: Router = Router();

// Routes pour les produits
productRoutes.post('/products', ProductController.createProduct);
productRoutes.get('/products', ProductController.getAllProducts);
productRoutes.get('/products/:id', ProductController.getProductById);
productRoutes.patch('/products/:id', ProductController.updateProduct);
productRoutes.put('/products/:id', ProductController.updateProduct);
productRoutes.delete('/products/:id', ProductController.deleteProduct);

export { productRoutes };