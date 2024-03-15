import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import packageJson from '../../package.json';

export const baseRoute = Router();

baseRoute.get('/', (_, res) => {
  const { name, version, description, author } = packageJson;
  res.status(StatusCodes.OK).json({ name, version, description, author });
});
