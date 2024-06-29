import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { AppError } from '../errors/app.error';
import { UserService } from '../services/users.service';

export class TransferController {
  constructor(private userService: UserService) {}

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, value } = req.body;

      const user = await this.userService.findByEmail(email);

      if (!user) {
        throw new AppError('This email not exists.', StatusCodes.BAD_REQUEST);
      }

      if (value <= 0) {
        throw new AppError(
          'The value need to be more than 0',
          StatusCodes.BAD_REQUEST,
        );
      }

      const userLogged = req.query.userEmail;

      if (userLogged === email) {
        throw new AppError(
          `You are can't transfer for yourself`,
          StatusCodes.BAD_REQUEST,
        );
      }

      const fromUser = await this.userService.findByEmail(userLogged as string);

      if (fromUser?.balance != undefined) {
        if (fromUser?.balance < value) {
          throw new AppError(
            'Your balance is less than value.',
            StatusCodes.BAD_REQUEST,
          );
        }
      }

      const userUpdated = await this.userService.valueTransfer(
        userLogged as string,
        user.email,
        value,
      );

      return res.status(StatusCodes.OK).json(userUpdated);
    } catch (err) {
      next(err);
    }
  };
}
