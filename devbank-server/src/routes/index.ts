import { Router } from 'express';

import { baseRoute } from './base.route';
export const routes = Router();

routes.use('/', baseRoute);
