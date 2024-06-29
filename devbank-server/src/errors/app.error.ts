import { StatusCodes } from 'http-status-codes';

export class AppError {
  public statusCode: StatusCodes;
  public message: string | string[];
  public errorText?: string;

  constructor(
    message: string | string[],
    statusCode: StatusCodes,
    errorText?: string,
  ) {
    this.message = message;
    this.statusCode = statusCode;
    this.errorText = errorText;
  }
}
