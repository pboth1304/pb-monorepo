import { NextFunction, Request, Response } from 'express';
import User from '../classes/User.class';
import QueryUtils from '../utils/QueryUtils.class';
import Validator from '../classes/Validator.class';
import { ErrorHandler } from '../classes/ErrorHandler.class';
import { wrapAsync } from '../utils/error-handling.utils';

class UsersController {
  private readonly user: User;
  private readonly validator: Validator;

  constructor() {
    this.validator = new Validator();
    this.user = new User();
  }

  /**
   * GET all users.
   * The data can be filtered, sorted, fields limited and
   * paginated. This functionality is provided by the `QueryUtils` Class.
   * @param query
   * @param res
   */
  getAllUsers = wrapAsync(async ({ query }: Request, res: Response) => {
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
  });

  /**
   * GET one User by it's id.
   * @param userId
   * @param res
   * @param next - Express Next Function.
   */
  getUserById = wrapAsync(
    async (
      { params: { userId } }: Request,
      res: Response,
      next: NextFunction
    ) => {
      const user = await this.user.getUserModel().findById(userId);

      if (!user) {
        return next(new ErrorHandler(404, 'No User with this Id found!'));
      }

      res.status(200).json({ status: 'success', data: { user } });
    }
  );

  /**
   * POST create new User.
   * @param body - newUserDto
   * @param res - Response Object
   */
  createNewUser = wrapAsync(async ({ body }: Request, res: Response) => {
    const newUser = await this.user.getUserModel().create(body); // TODO: extract only properties of createNewUserDTO

    newUser.password = undefined;

    res.status(201).json({ status: 'success', data: { user: newUser } });
  });

  /**
   * PATCH update existing User by it's id.
   * @param body - Body Property of Request Object of type `UpdateUserDto`.
   * @param userId - Desctructured `userId` of the `Request.params` object.
   * @param res - Response Object
   * @param next - Express Next Function.
   */
  updateUserById = wrapAsync(
    async (
      { params: { userId }, body }: Request,
      res: Response,
      next: NextFunction
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
        return next(new ErrorHandler(404, 'No User with this Id found!'));
      }

      res.status(201).json({ status: 'success', data: { user: updatedUser } });
    }
  );

  /**
   * DELETE one User by it's id.
   * @param userId - Desctructured `userId` of the `Request.params` object.
   * @param res - Response Object
   * @param next - Express Next Function.
   */
  deleteUserById = wrapAsync(
    async (
      { params: { userId } }: Request,
      res: Response,
      next: NextFunction
    ) => {
      const user = await this.user.getUserModel().findByIdAndDelete(userId);

      if (!user) {
        return next(new ErrorHandler(404, 'No User with this Id found!'));
      }

      res.status(204).json({});
    }
  );

  /**
   * DELETE current logged in user by doing set user as inactive.
   * @param req - Request Object.
   * @param res - Response Object.
   * @param next - Express Next Function.
   */
  deleteMe = wrapAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      /** 'Delete' User and set active to false */
      const user = await this.user
        .getUserModel()
        .findByIdAndUpdate(req['user']._id, { active: false });

      if (!user) {
        return next(new ErrorHandler(404, 'No User with this Id found!'));
      }

      res.status(204).json({
        status: 'success',
        data: null
      });
    }
  );

  /**
   * GET the current logged in user.
   * @param req - Request Object.
   * @param res - Response Object.
   * @param next - Express next Function.
   */
  getMe = (req: Request, res: Response, next: NextFunction) => {
    /** Set the _id of the current user as userId param and call next function */
    req.params['userId'] = req['user']._id;

    next();
  };

  /**
   * PATCH current logged in user.
   * @param req - Request Object.
   * @param res - Response Object.
   * @param next - Express next Function.
   */
  updateMe = async (req: Request, res: Response, next: NextFunction) => {
    /** Set the _id of the current user as userId param and call next function */
    if (req.body.password) {
      return next(
        new ErrorHandler(
          400,
          'Do not use this route for updating passwords. Use /updatePassword instead.'
        )
      );
    }

    req.params['userId'] = req['user']._id;

    next();
  };
}

export default UsersController;
