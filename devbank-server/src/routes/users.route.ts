import { Router } from 'express';

import { UsersController } from '../controllers/users.controller';
import { UsersService } from '../services/users.service';

export const usersRoute = Router();

const service = new UsersService();
const controller = new UsersController(service);

usersRoute.post('/users', controller.create);
