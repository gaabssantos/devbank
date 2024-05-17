import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { UserService } from '../services/users.service';

export class UserController {
  constructor(private userService: UserService) {}

  create = async (req: Request, res: Response, _: NextFunction) => {
    const { name, lastName, email, password } = req.body;

    const userFound = await this.userService.findByEmail(email);

    if (userFound) {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ error: 'This email already exists.' });
    }

    const passwordHashed = await bcrypt.hash(password, 10);

    const user = await this.userService.create({
      name,
      lastName,
      email,
      password: passwordHashed,
      balance: 0,
    });

    return res.status(StatusCodes.CREATED).json(user);
  };
}
