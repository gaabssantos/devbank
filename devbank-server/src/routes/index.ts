import { Router } from 'express';

import { accountsRoute } from './accounts.route';
import { baseRoute } from './base.route';
import { usersRoute } from './users.route';
export const routes = Router();

routes.use('/', baseRoute);
routes.use('/users', usersRoute);
routes.use('/accounts', accountsRoute);
