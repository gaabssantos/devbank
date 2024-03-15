import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { AccountsService } from '../services/accounts.service';

const createAccountNumber = () => {
  return Math.floor(Math.random() * 5000);
};

export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  create = async (_: Request, res: Response, next: NextFunction) => {
    try {
      const accountNumber = createAccountNumber();

      const account = await this.accountsService.create({
        accountNumber,
        balance: 0,
      });

      res.status(StatusCodes.CREATED).json(account);
    } catch (err) {
      next(err);
    }
  };
}
