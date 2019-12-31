import { Router } from 'express';
import Validator from '../classes/Validator.class';
import { Route } from '@pb-monorepo/travelency/models';
import { Auth } from '../classes/Auth.class';
import AuthController from '../controllers/auth.controller';
import { UpdatePasswordDto } from '../dtos/update-password.dto';

/**
 * Put's together all Routes of the Auth Resource.
 */
class AuthRoutes implements Route {
  private path = '/auth';
  private authController: AuthController;
  private auth: Auth;
  private validator: Validator;
  private readonly router: Router;

  constructor() {
    this.router = Router();
    this.auth = new Auth();
    this.authController = new AuthController();
    this.validator = new Validator();
    this.initializeRoutes();
  }

  /**
   * Getter for the route path.
   */
  public getRoutePath() {
    return this.path;
  }

  /**
   * Setter for the route path.
   */
  public setRoutePath(routePath: string) {
    this.path = routePath;
  }

  /**
   * Getter for the router.
   */
  public getRouter() {
    return this.router;
  }

  /**
   * Function which initializes all routes
   * which belongs to the Auth Resource.
   */
  public initializeRoutes() {
    this.router.route('/login').post(this.authController.login);

    this.router.route('/signup').post(this.authController.signUp);

    this.router.route('/logout').get(this.authController.logout);

    this.router
      .route('/updatePassword')
      .patch(
        this.auth.grantRouteAccess,
        this.validator.validationMiddleware<UpdatePasswordDto>(
          UpdatePasswordDto
        ),
        this.authController.updatePassword
      );
  }
}

export default AuthRoutes;
