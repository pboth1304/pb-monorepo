import { Request, Response, Router } from 'express';
import User from '../classes/User.class';
import QueryUtils from '../utils/QueryUtils.class';

class UsersController {
  public path = '/users';
  public router = Router();
  private readonly user: User;

  constructor() {
    this.user = new User();
    this.initializeRoutes();
  }

  /**
   * Function which initializes all routes
   * of the `UserController`.
   */
  public initializeRoutes() {
    this.router
      .route('')
      .get(this.getAllUsers)
      .post(this.createNewUser);

    this.router
      .route('/:userId')
      .get(this.getUserById)
      .patch(this.updateUserById)
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
  getUserById = async ({ params: { userId } }: Request, res: Response) => {};

  /**
   * POST create new User.
   * @param body
   * @param res
   */
  createNewUser = async ({ body }: Request, res: Response) => {};

  /**
   * PATCH update existing User by it's id.
   * @param body - Body Property of Request Object of type `UpdateUserDto`.
   * @param userId - Desctructured `userId` of the `Request.params` object.
   * @param res - Response Object
   */
  updateUserById = async (
    { params: { userId }, body }: Request,
    res: Response
  ) => {};

  /**
   * DELETE one User by it's id.
   * @param userId - Desctructured `userId` of the `Request.params` object.
   * @param res - Response Object
   * @param next - Express next function
   */
  deleteUserById = async ({ params: { userId } }: Request, res: Response) => {};
}

export default UsersController;
