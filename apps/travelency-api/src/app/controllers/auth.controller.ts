import { Request, Response } from 'express';
import { Auth } from '../classes/Auth.class';
import User from '../classes/User.class';

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
   */
  login = async ({ body }: Request, res: Response) => {
    /** If there is no email or password return an error. */
    if (!body.email || !body.password) {
      res.status(401).json({
        status: 'error',
        msg: 'You have to provide a email and a password.'
      });

      return;
    }

    const user = await this.user.validateUser(body.email);

    /** If there is no user found on DB return an error. */
    if (!user) {
      res.status(401).json({
        status: 'error',
        msg: 'This user does not exist.'
      });

      return;
    }

    /** If the provided password is not matching with the one on the DB return an error. */
    if (!(await user.checkPasswordIsCorrect(body.password, user.password))) {
      res.status(401).json({
        status: 'error',
        msg: 'You have to provide the correct email and password.'
      });

      return;
    }

    /** Sign JWT */
    const token = this.auth.signToken(user['_id']);

    /** Remove password from the response object */
    user.password = undefined;

    res.status(200).json({ status: 'success', data: { token, user } });
  };

  /**
   * Sign Up handler. Registers a new user if the provided data is valid.
   * @param body
   * @param res
   */
  signUp = async ({ body }: Request, res: Response) => {
    const newUser = await this.user.getUserModel().create(body); // TODO: add check if user already exists

    const token = this.auth.signToken(newUser['_id']);

    /** Remove password from response obj */
    newUser.password = undefined;

    res.status(201).json({
      status: 'success',
      data: { token, user: newUser }
    });
  };

  logout = async (req: Request, res: Response) => {};

  /**
   * Update Password handler. Updates the current user's password.
   * @param req - Request object with user and updatePasswordDto in it.
   * @param res - Response Object.
   */
  updatePassword = async (req: Request, res: Response) => {
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
      res
        .send(401)
        .json({ status: 'fail', msg: 'Your current password is wrong.' });

      return;
    }

    /** If given password is correct update password */
    user.password = req.body.newPassword;
    user.passwordConfirm = req.body.newPasswordConfirm;

    await user.save();

    /** Log user in and send jwt token */
    const token = this.auth.signToken(user['_id']);

    res.status(200).json({
      status: 'success',
      data: { token, user }
    });
  };
}

export default AuthController;
