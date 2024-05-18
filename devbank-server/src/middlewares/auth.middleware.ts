import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt, { JwtPayload } from 'jsonwebtoken';

import { AppError } from '../errors/app.error';

export default (req: Request, _: Response, next: NextFunction) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    throw new AppError('Token not provied.', StatusCodes.UNAUTHORIZED);
  }

  const token = authToken.split(' ')[1];

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as JwtPayload;

    req.query.userId = decoded?.id;
    req.query.userId = decoded?.id;
  } catch (err) {
    throw new AppError('Token is invalid.', StatusCodes.UNAUTHORIZED);
  }

  next();
};
