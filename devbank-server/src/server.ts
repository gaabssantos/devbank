import express from 'express';

import { setupMongo } from './database';
import { routes } from './routes';

import 'dotenv/config';

setupMongo().then(() => {
  const app = express();

  app.use(express.json());
  app.use(routes);

  const port = process.env.PORT;

  app.listen(port, () => {
    console.log(`✨ Server has started in port ${port}!`);
  });
});
