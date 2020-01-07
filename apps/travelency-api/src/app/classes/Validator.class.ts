import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ErrorHandler } from './ErrorHandler.class';

class Validator {
  public validationMiddleware<T>(type: any): RequestHandler {
    return ({ body }: Request, res: Response, next: NextFunction) => {
      validate(plainToClass(type, body)).then((errors: any[]) => {
        if (errors.length > 0) {
          const message = errors
            .map(error => Object.values(error.constraints))
            .join(', ');
          next(new ErrorHandler(null, message));
        } else {
          next();
        }
      });
    };
  }
}

export default Validator;
