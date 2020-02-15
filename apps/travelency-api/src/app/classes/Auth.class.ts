import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { environment } from '../../environments/environment';
import User from './User.class';
import { wrapAsync } from '../utils/error-handling.utils';
import { ErrorHandler } from './ErrorHandler.class';
import { Roles } from '@pb-monorepo/travelency/models';

export class Auth {
  private readonly user: User;

  constructor() {
    this.user = new User();
  }

  /**
   * Middleware to check if user is logged in. If so, grant route access.
   */
  grantRouteAccess = wrapAsync(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      let token;

      /** Get token from Authorization Header */
      const authHeader = req.headers['authorization'] as string;

      if (authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1]; // Split token, to get token only
      } else if (req.cookies.jwt) {
        token = req.cookies.jwt;
      }

      if (!token) {
        return next(new ErrorHandler(401, 'You are not logged in!'));
      }

      /** Decode Jwt Token */
      const decodedToken = await promisify(jwt.verify)(
        token,
        environment.JWT_SECRET_KEY
      );

      /** Check if user still exists with userId from decoded token */
      const currentUser = await this.user
        .getUserModel()
        .findById(decodedToken['userId']);

      if (!currentUser) {
        return next(
          new ErrorHandler(
            401,
            'The User belonging to this token does not longer exist.'
          )
        );
      }

      req['user'] = currentUser;

      next();
    }
  );

  /**
   * Middleware to restrict the access of a route to the given Roles.
   * @param roles
   */
  public restrictTo(...roles: Roles[]) {
    return (req: Request, res: Response, next: NextFunction) => {
      if (!roles.includes(req['user'].role.toUpperCase())) {
        return next(
          new ErrorHandler(
            403,
            'You do not have permission to perform this action.'
          )
        );
      }

      next();
    };
  }

  /**
   * Sign's a JWT Token by the given User Id.
   * @param userId
   */
  public signToken(userId: string): string {
    return jwt.sign({ userId }, environment.JWT_SECRET_KEY, {
      expiresIn: environment.JWT_EXPIRES_IN
    });
  }
}
