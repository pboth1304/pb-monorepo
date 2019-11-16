import { Request, Response, Router } from 'express';
import User from '../classes/User.class';
import { UserDoc } from '@pb-monorepo/travelency/models';

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

  login = async (req: Request, res: Response) => {};

  signUp = async ({ body }: Request, res: Response) => {
    const newUser = await this.user.getUserModel().create(body);

    res.status(201).json({
      status: 'success',
      data: { user: newUser }
    });
  };

  logout = async (req: Request, res: Response) => {};

  updatePassword = async (req: Request, res: Response) => {};

  /**
   * Validates the existance of the given User.
   * @param userData
   */
  private async validateUser(email: string): Promise<UserDoc> {
    return this.user
      .getUserModel()
      .findOne(email)
      .select('+password');
  }
}

export default AuthController;
