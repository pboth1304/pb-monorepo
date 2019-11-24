import { Request, Response, Router } from 'express';
import { Auth } from '../classes/Auth.class';
import User from '../classes/User.class';

class AuthController {
  public path = '/auth';
  public router = Router();
  private readonly user: User;
  private readonly auth: Auth;

  constructor() {
    this.user = new User();
    this.auth = new Auth();
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

      return;
    }

    const user = await this.user.validateUser(body.email);

    if (!user) {
      res.status(401).json({
        status: 'error',
        msg: 'This user does not exist.'
      });

      return;
    }

    if (!(await user.checkPasswordIsCorrect(body.password, user.password))) {
      res.status(401).json({
        status: 'error',
        msg: 'You have to provide the correct email and password.'
      });

      return;
    }

    const token = this.auth.signToken(user['_id']);

    user.password = undefined; // Delete password from response

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
}

export default AuthController;
