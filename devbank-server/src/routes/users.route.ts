import { Router } from 'express';

import { UserController } from '../controllers/users.controller';
import { UserFactory } from '../factories/users.factory';

export const userRoute = Router();

const controller = new UserController(UserFactory.getServiceInstance());

userRoute.post('/', controller.create);
