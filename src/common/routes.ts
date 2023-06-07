import { Router, Request, Response } from 'express';
import { productRoutes } from '../api/routes/product.route';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({'[Express]': 'Service up and running'});
});

router.use('/', productRoutes);

export { router };