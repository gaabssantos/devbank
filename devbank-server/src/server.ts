import express from 'express';

import 'dotenv/config';
import { initMongo } from './database';
import { routes } from './routes';

initMongo().then(() => {
  const app = express();

  app.use(express.json());
  app.use(routes);

  app.listen(process.env.PORT, () => {
    console.log('🚀 Server has started!');
  });
});
