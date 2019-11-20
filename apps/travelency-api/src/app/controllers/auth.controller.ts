import { Request, Response, Router } from 'express';
import User from '../classes/User.class';
import { UserDoc } from '@pb-monorepo/travelency/models';
import { environment } from '../../environments/environment';
import * as jwt from 'jsonwebtoken';

class AuthController {
  public path = '/auth';
  public router = Router();
  private readonly user: User;

  constructor() {
    this.user = new User();
    this.initializeRoutes();
  }

  /**
   * Function which initializes all routes
   * of the `AuthController`.
   */
  public initializeRoutes() {
    this.router.route('/login').post(this.login);

    this.router.route('/signup').post(this.signUp);

    this.router.route('/logout').post(this.logout);

    this.router.route('/updatePassword').patch(this.updatePassword);
  }

  login = async ({ body }: Request, res: Response) => {
    if (!body.email || !body.password) {
      res.status(401).json({
        status: 'error',
        msg: 'You have to provide a email and a password.'
      });
    }
    const user = await this.user.validateUser(body.email);

    if (!user) {
      res.status(401).json({
        status: 'error',
        msg: 'This user does not exist.'
      });
    }

    if (!(await user.checkPasswordIsCorrect(body.password, user.password))) {
      res.status(401).json({
        status: 'error',
        msg: 'You have to provide the correct email and password.'
      });
    }

    const token = this.signToken(user['_id']);

    user.password = undefined;

    res.status(200).json({ status: 'success', data: { token, user } });
  };

  signUp = async ({ body }: Request, res: Response) => {
    const newUser = await this.user.getUserModel().create(body);

    res.status(201).json({
      status: 'success',
      data: { user: newUser }
    });
  };

  logout = async (req: Request, res: Response) => {};

  updatePassword = async (req: Request, res: Response) => {};

  private signToken(userId: string): string {
    return jwt.sign({ userId }, environment.JWT_SECRET_KEY, {
      expiresIn: environment.JWT_EXPIRES_IN
    });
  }
}

export default AuthController;
