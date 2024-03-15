import express from 'express';

import 'dotenv/config';
import { initMongo } from './database';
import { errorHandler } from './middlewares/error.middleware';
import { routes } from './routes';

initMongo().then(() => {
  const app = express();

  app.use(express.json());
  app.use(routes);
  app.use(errorHandler);

  app.listen(process.env.PORT, () => {
    console.log('🚀 Server has started!');
  });
});
