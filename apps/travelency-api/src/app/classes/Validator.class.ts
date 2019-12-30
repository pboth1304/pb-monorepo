import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { RequestHandler } from 'express';
import { ErrorHandler } from './ErrorHandler.class';

class Validator {
  public validationMiddleware<T>(type: any): RequestHandler {
    return (req, res, next) => {
      validate(plainToClass(type, req.body)).then((errors: any[]) => {
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
