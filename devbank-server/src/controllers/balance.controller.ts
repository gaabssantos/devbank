import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { AppError } from '../errors/app.error';
import { UserService } from '../services/users.service';

interface RequestType extends Request {
  userEmail: string;
}

export class BalanceController {
  constructor(private userService: UserService) {}

  create = async (
    req: Request<undefined, undefined, undefined, RequestType>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const userFound = await this.userService.findByEmail(req.query.userEmail);

      return res.status(StatusCodes.OK).json({
        name: userFound?.name,
        email: userFound?.email,
        balance: userFound?.balance,
      });
    } catch (err) {
      next(err);
    }
  };
}
