import { Router } from 'express';

import { UserController } from '../controllers/users.controller';
import { SessionController } from '../controllers/users.session.controller';
import { userSchema } from '../dtos/users.dto';
import { UserFactory } from '../factories/users.factory';
import { ParamsType, validator } from '../middlewares/validator.middleware';

export const userRoute = Router();

const controller = new UserController(UserFactory.getServiceInstance());

const controllerSession = new SessionController(
  UserFactory.getServiceInstance(),
);

userRoute.post(
  '/',
  validator({
    schema: userSchema,
    type: ParamsType.BODY,
  }),
  controller.create,
);

userRoute.post('/session', controllerSession.create);
