import { Router } from 'express';

import { mainRoute } from './main.route';
import { transferRoute } from './transfers.route';
import { userRoute } from './users.route';

export const routes = Router();

routes.use('/', mainRoute);
routes.use('/users', userRoute);
routes.use('/transfers', transferRoute);
