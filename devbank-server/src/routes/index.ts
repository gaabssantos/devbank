import { Router } from 'express';

import { baseRoute } from './base.route';
import { usersRoute } from './users.route';
export const routes = Router();

routes.use('/', baseRoute);
routes.use('/', usersRoute);
