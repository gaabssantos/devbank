import { Router } from 'express';

import { BalanceController } from '../controllers/balance.controller';
import { UserFactory } from '../factories/users.factory';

export const balanceRoute = Router();

const balanceController = new BalanceController(
  UserFactory.getServiceInstance(),
);

balanceRoute.get('/', balanceController.create);
