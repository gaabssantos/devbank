import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

import { AppError } from '../errors/app.error';
import { UserService } from '../services/users.service';

export class SessionController {
  constructor(private userService: UserService) {}

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      const user = await this.userService.findByEmail(email);

      const emailOrPasswordIncorrect = () => {
        throw new AppError(
          'Email or password is incorrect.',
          StatusCodes.UNAUTHORIZED,
        );
      };

      if (!user) {
        emailOrPasswordIncorrect();
      }

      const passwordUnhashed = await bcrypt.compare(
        password,
        user?.password as string,
      );

      if (!passwordUnhashed) {
        emailOrPasswordIncorrect();
      }

      const userSession = {
        name: user?.name,
        email: user?.email,
        balance: user?.balance,
        token: jwt.sign(
          { id: user?._id, email: user?.email },
          process.env.JWT_SECRET as string,
          {
            expiresIn: process.env.JWT_EXPIRES,
          },
        ),
      };

      return res.status(StatusCodes.OK).json(userSession);
    } catch (err) {
      next(err);
    }
  };
}
