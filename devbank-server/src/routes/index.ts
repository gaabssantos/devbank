import { Router } from 'express';

import authMiddleware from '../middlewares/auth.middleware';
import { balanceRoute } from './balance.route';
import { mainRoute } from './main.route';
import { transferRoute } from './transfers.route';
import { userRoute } from './users.route';

export const routes = Router();

routes.use('/', mainRoute);
routes.use('/users', userRoute);
routes.use(authMiddleware);
routes.use('/transfers', transferRoute);
routes.use('/balance', balanceRoute);
