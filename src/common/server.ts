import express, { Express, Request, Response, NextFunction } from 'express';
import { router } from './routes';


export const Server = (port: number) => {

  const app: Express = express();

  // Middleware global pour parser le JSON
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/', router);

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({'Error message': err.message});
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
