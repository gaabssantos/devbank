import { Router } from 'express';

import { AccountsController } from '../controllers/accounts.controller';
import { AccountsRepository } from '../database/repositories/accounts.repository';
import { AccountsModel } from '../database/schemas/accounts.schema';
import { AccountsService } from '../services/accounts.service';

export const accountsRoute = Router();

const repository = new AccountsRepository(AccountsModel);
const service = new AccountsService(repository);
const controller = new AccountsController(service);

accountsRoute.post('/', controller.create);
