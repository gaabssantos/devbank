import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { UsersService } from '../services/users.service';

export class UsersController {
  constructor(private usersService: UsersService) {}

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, lastName, email, password } = req.body;

      const createdUser = await this.usersService.create(
        name,
        lastName,
        email,
        password,
      );

      return res.status(StatusCodes.CREATED).json(createdUser);
    } catch (err) {
      next(err);
    }
  };
}
