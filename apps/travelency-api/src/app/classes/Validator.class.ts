import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { RequestHandler } from 'express';

class Validator {
  public validationMiddleware<T>(type: any): RequestHandler {
    return (req, res, next) => {
      validate(plainToClass(type, req.body)).then((errors: any[]) => {
        if (errors.length > 0) {
          const message = errors
            .map(error => Object.values(error.constraints))
            .join(', ');
          next(new Error(message));
        } else {
          next();
        }
      });
    };
  }
}

export default Validator;
