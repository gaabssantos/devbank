import { StatusCodes } from 'http-status-codes';

export class AppError {
  public message: string | string[];
  public statusCode: StatusCodes;

  constructor(message: string | string[], statusCode: StatusCodes) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
