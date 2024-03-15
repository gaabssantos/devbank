import { Router } from 'express';

import { UsersController } from '../controllers/users.controller';
import { UsersRepository } from '../database/repositories/users.repository';
import { UsersModel } from '../database/schemas/users.schema';
import { createUserSchema } from '../dtos/users.dto';
import { ParamsType, validator } from '../middlewares/validator.middleware';
import { UsersService } from '../services/users.service';

export const usersRoute = Router();

const repository = new UsersRepository(UsersModel);
const service = new UsersService(repository);
const controller = new UsersController(service);

usersRoute.post(
  '/',
  validator({ schema: createUserSchema, type: ParamsType.BODY }),
  controller.create,
);
