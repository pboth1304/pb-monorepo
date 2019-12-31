import { NextFunction, Request, Response } from 'express';
import { Auth } from '../classes/Auth.class';
import User from '../classes/User.class';
import { wrapAsync } from '../utils/error-handling.utils';
import { ErrorHandler } from '../classes/ErrorHandler.class';

class AuthController {
  private readonly user: User;
  private readonly auth: Auth;

  constructor() {
    this.user = new User();
    this.auth = new Auth();
  }

  /**
   * Login Handler function. If the correct password and email
   * are provided, a JWT will be send to the client.
   * @param body - email and password
   * @param res - Response Object with JWT token and user data.
   * @param next - Express next Function.
   */
  login = wrapAsync(
    async ({ body }: Request, res: Response, next: NextFunction) => {
      /** If there is no email or password return an error. */
      if (!body.email || !body.password) {
        return next(
          new ErrorHandler(401, 'You have to provide a email and a password.')
        );
      }

      const user = await this.user.validateUser(body.email);

      /** If there is no user found on DB return an error. */
      if (!user) {
        return next(
          new ErrorHandler(
            401,
            'You have to provide the correct email and password.'
          )
        );
      }

      /** If the provided password is not matching with the one on the DB return an error. */
      if (!(await user.checkPasswordIsCorrect(body.password, user.password))) {
        return next(
          new ErrorHandler(
            401,
            'You have to provide the correct email and password.'
          )
        );
      }

      /** Sign JWT */
      const token = this.auth.signToken(user['_id']);

      /** Remove password from the response object */
      user.password = undefined;

      res.status(200).json({ status: 'success', data: { token, user } });
    }
  );

  /**
   * Sign Up handler. Registers a new user if the provided data is valid.
   * @param body
   * @param res
   */
  signUp = wrapAsync(async ({ body }: Request, res: Response) => {
    const newUser = await this.user.getUserModel().create(body); // TODO: add check if user already exists

    const token = this.auth.signToken(newUser['_id']);

    /** Remove password from response obj */
    newUser.password = undefined;

    res.status(201).json({
      status: 'success',
      data: { token, user: newUser }
    });
  });

  /**
   * Update Password handler. Updates the current user's password.
   * @param req - Request object with user and updatePasswordDto in it.
   * @param res - Response Object.
   * @param next - Express next Function.
   */
  updatePassword = wrapAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const user = await this.user
        .getUserModel()
        .findById(req['user']._id)
        .select('password');

      /** Check if given password is correct */
      if (
        !(await user.checkPasswordIsCorrect(
          req.body['currentPassword'],
          user.password
        ))
      ) {
        return next(
          new ErrorHandler(401, 'You have to provide the correct password.')
        );
      }

      /** If given password is correct update password */
      user.password = req.body.newPassword;
      user.passwordConfirm = req.body.newPasswordConfirm;

      await user.save();

      /** Log user in and send jwt */
      const token = this.auth.signToken(user['_id']);

      res.status(200).json({
        status: 'success',
        data: { token, user }
      });
    }
  );

  logout = async (req: Request, res: Response) => {};
}

export default AuthController;
