import { StatusCodes } from 'http-status-codes';

export class AppError {
  public statusCodes: StatusCodes;
  public message: string | string[];

  constructor(message: string | string[], statusCodes: StatusCodes) {
    this.message = message;
    this.statusCodes = statusCodes;
  }
}
