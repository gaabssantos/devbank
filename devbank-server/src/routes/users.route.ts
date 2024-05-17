import { Router } from 'express';

import { UserController } from '../controllers/users.controller';
import { userSchema } from '../dtos/users.dto';
import { UserFactory } from '../factories/users.factory';
import { ParamsType, validator } from '../middlewares/validator.middleware';

export const userRoute = Router();

const controller = new UserController(UserFactory.getServiceInstance());

userRoute.post(
  '/',
  validator({
    schema: userSchema,
    type: ParamsType.BODY,
  }),
  controller.create,
);
