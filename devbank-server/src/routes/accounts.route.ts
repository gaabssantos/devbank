import { Router } from 'express';

import { AccountsController } from '../controllers/accounts.controller';
import { AccountsService } from '../services/accounts.service';

export const accountsRoute = Router();

const service = new AccountsService();
const controller = new AccountsController(service);

accountsRoute.post('/', controller.create);
