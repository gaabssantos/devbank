import cors from 'cors';
import express from 'express';

import { setupMongo } from './database';
import { errorHandler } from './middlewares/error-handler.middleware';
import { routes } from './routes';

import 'dotenv/config';

setupMongo().then(() => {
  const app = express();

  app.use(express.json());
  app.use(cors({ origin: process.env.FRONT_URL }));
  app.use(routes);
  app.use(errorHandler);

  const port = process.env.PORT;

  app.listen(port, () => {
    console.log(`✨ Server has started in port ${port}!`);
  });
});
