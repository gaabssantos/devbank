import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { UserDTO } from '../dtos/users.dto';
import { AppError } from '../errors/app.error';
import { UserService } from '../services/users.service';

export class UserController {
  constructor(private userService: UserService) {}

  create = async (
    req: Request<unknown, unknown, UserDTO>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { name, lastName, email, password } = req.body;

      const userFound = await this.userService.findByEmail(email);

      if (userFound) {
        throw new AppError(
          'This email already exists.',
          StatusCodes.UNAUTHORIZED,
        );
      }

      const passwordHashed = await bcrypt.hash(password, 10);

      const user = await this.userService.create({
        name,
        lastName,
        email,
        password: passwordHashed,
        balance: 5000,
        activities: [],
      });

      return res.status(StatusCodes.CREATED).json(user);
    } catch (err) {
      next(err);
    }
  };
}
