import { Request, Response, Router } from 'express';
import User from '../classes/User.class';
import QueryUtils from '../utils/QueryUtils.class';
import { Auth } from '../classes/Auth.class';
import Validator from '../classes/Validator.class';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { catchAsyncFunction } from '../utils/CatchAsyncFunctionUtil.class';

class UsersController {
  public path = '/users';
  public router = Router();
  private readonly user: User;
  private readonly auth: Auth;
  private readonly validator: Validator;

  constructor() {
    this.user = new User();
    this.auth = new Auth();
    this.validator = new Validator();

    this.initializeRoutes();
  }

  /**
   * Function which initializes all routes
   * of the `UserController`.
   */
  public initializeRoutes() {
    /** Protect all users route */
    this.router.use(this.auth.grantRouteAccess);

    this.router
      .route('')
      .get(this.getAllUsers)
      .post(
        this.validator.validationMiddleware<CreateUserDto>(CreateUserDto),
        this.createNewUser
      );

    this.router
      .route('/:userId')
      .get(this.getUserById)
      .patch(
        this.validator.validationMiddleware<UpdateUserDto>(UpdateUserDto),
        this.updateUserById
      )
      .delete(this.deleteUserById);
  }

  /**
   * GET all users.
   * The data can be filtered, sorted, fields limited and
   * paginated. This functionality is provided by the `QueryUtils` Class.
   * @param query
   * @param res
   */
  getAllUsers = async ({ query }: Request, res: Response) => {
    const queryUtils = new QueryUtils(this.user.getUserModel(), query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const users = await queryUtils.model;

    /**
     * Send Response
     */
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: { users }
    });
  };

  /**
   * GET one User by it's id.
   * @param userId
   * @param res
   */
  getUserById = async ({ params: { userId } }: Request, res: Response) => {
    const user = await this.user.getUserModel().findById(userId);

    if (!user) {
      res
        .status(404)
        .json({ status: 'error', message: 'No User with this id found!' });

      return;
    }

    res.status(200).json({ status: 'success', data: { user } });
  };

  /**
   * POST create new User.
   * @param body - newUserDto
   * @param res - Response Object
   */
  createNewUser = async ({ body }: Request, res: Response) => {
    const newUser = await this.user.getUserModel().create(body);

    newUser.password = undefined;

    res.status(201).json({ status: 'success', data: { user: newUser } });
  };

  /**
   * PATCH update existing User by it's id.
   * @param body - Body Property of Request Object of type `UpdateUserDto`.
   * @param userId - Desctructured `userId` of the `Request.params` object.
   * @param res - Response Object
   */
  updateUserById = async (
    { params: { userId }, body }: Request,
    res: Response
  ) => {
    const updateUserData = body;

    /**
     * Delete password and passwordConfirm
     * properties from body if present.
     * Passwords can only be updated via the
     * `updatePassword` endpoint.
     */
    if (body.password) {
      delete updateUserData.password;
    }

    if (body.passwordConfirm) {
      delete updateUserData.passwordConfirm;
    }

    const updatedUser = await this.user
      .getUserModel()
      .findByIdAndUpdate(userId, body, {
        new: true,
        runValidators: false
      });

    if (!updatedUser) {
      res.status(404).json({ status: 'error', msg: 'No matching User found!' });
    }

    res.status(201).json({ status: 'success', data: { user: updatedUser } });
  };

  /**
   * DELETE one User by it's id.
   * @param userId - Desctructured `userId` of the `Request.params` object.
   * @param res - Response Object
   * @param next - Express next function
   */
  deleteUserById = async ({ params: { userId } }: Request, res: Response) => {
    const user = await this.user.getUserModel().findByIdAndDelete(userId);

    if (!user) {
      res
        .status(404)
        .json({ status: 'error', message: 'No User with this id found!' });
    }

    res.status(204).json();
  };
}

export default UsersController;
