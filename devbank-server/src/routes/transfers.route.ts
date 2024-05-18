import { Router } from 'express';

import { TransferController } from '../controllers/transfers.controller';
import { UserFactory } from '../factories/users.factory';

export const transferRoute = Router();

const controller = new TransferController(UserFactory.getServiceInstance());

transferRoute.post('/', controller.create);
