import { Router } from 'express';
import Validator from '../classes/Validator.class';
import { Route } from '@pb-monorepo/travelency/models';
import UsersController from '../controllers/users.controller';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { Auth } from '../classes/Auth.class';

/**
 * Put's together all Routes of the User Resource.
 */
class UserRoutes implements Route {
  private path = '/users';
  private usersController: UsersController;
  private auth: Auth;
  private validator: Validator;
  private readonly router: Router;

  constructor() {
    this.router = Router();
    this.auth = new Auth();
    this.usersController = new UsersController();
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
   * which belongs to the User Resource.
   */
  public initializeRoutes() {
    /** Protect all users route */
    this.router.use(this.auth.grantRouteAccess);

    this.router
      .route('/me')
      .get(this.usersController.getMe, this.usersController.getUserById)
      .delete(this.usersController.deleteMe);

    this.router
      .route('')
      .get(this.usersController.getAllUsers)
      .post(
        this.validator.validationMiddleware<CreateUserDto>(CreateUserDto),
        this.usersController.createNewUser
      );

    this.router
      .route('/:userId')
      .get(this.usersController.getUserById)
      .patch(
        this.validator.validationMiddleware<UpdateUserDto>(UpdateUserDto),
        this.usersController.updateUserById
      )
      .delete(this.usersController.deleteUserById);
  }
}

export default UserRoutes;
