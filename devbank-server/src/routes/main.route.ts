import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import packageJson from '../../package.json';

export const mainRoute = Router();

mainRoute.get('/', (_: Request, res: Response) => {
  const { name, version, description, author } = packageJson;

  return res
    .status(StatusCodes.OK)
    .json({ name, version, description, author });
});
