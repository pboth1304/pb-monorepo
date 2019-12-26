import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { environment } from '../../environments/environment';
import User from './User.class';

export class Auth {
  private readonly user: User;

  constructor() {
    this.user = new User();
  }

  public signToken(userId: string): string {
    return jwt.sign({ userId }, environment.JWT_SECRET_KEY, {
      expiresIn: environment.JWT_EXPIRES_IN
    });
  }

  grantRouteAccess = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    let token;

    /** Get token from Authorization Header */
    const authHeader = req.headers['authorization'] as string;

    if (authHeader && authHeader.startsWith('Bearer')) {
      token = authHeader.split(' ')[1]; // Split token, to get token only
    }
    // else, get jwt from cookie

    if (!token) {
      res.status(401).json({ status: 'fail', msg: 'You are not logged in!' });

      return;
    }

    /** Decode Jwt Token */
    const decodedToken = await promisify(jwt.verify)(
      token,
      environment.JWT_SECRET_KEY
    );
    console.log('decoded', decodedToken['userId']);
    /** Check if user still exists with userId from decoded token */
    const currentUser = await this.user
      .getUserModel()
      .findById(decodedToken['userId']);

    if (!currentUser) {
      res.status(401).json({
        status: 'fail',
        msg: 'The User belonging to this token does not longer exist.'
      });

      return;
    }

    req['user'] = currentUser;

    next();
  };
}
