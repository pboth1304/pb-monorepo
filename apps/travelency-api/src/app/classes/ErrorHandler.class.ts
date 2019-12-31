/**
 * Global Error Handler Class.
 */
export class ErrorHandler extends Error {
  private statusCode: string;
  private status: string;

  constructor(statusCode, message) {
    super();

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.message = message;

    Error.captureStackTrace(this, this.constructor);
  }
}
