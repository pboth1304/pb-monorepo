import { NextFunction, Request, Response } from 'express';
import { Auth } from '../classes/Auth.class';
import User from '../classes/User.class';
import { wrapAsync } from '../utils/error-handling.utils';
import { ErrorHandler } from '../classes/ErrorHandler.class';
import { UserDoc } from '@pb-monorepo/travelency/models';
import * as crypto from 'crypto';

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
    async ({ body, secure }: Request, res: Response, next: NextFunction) => {
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

      this.createTokenWithCookieToSend(user, 200, secure, res);
    }
  );

  /**
   * Sign Up handler. Registers a new user if the provided data is valid.
   * @param body
   * @param res
   */
  signUp = wrapAsync(async ({ body, secure }: Request, res: Response) => {
    const newUser = await this.user.getUserModel().create(body); // TODO: add check if user already exists

    this.createTokenWithCookieToSend(newUser, 201, secure, res);
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

      /** Set the current timestamp as passwordChangedAt prop of the user */
      user.passwordChangedAt = new Date();

      await user.save();

      this.createTokenWithCookieToSend(user, 200, req.secure, res);
    }
  );

  /**
   * Generate reset token and put it on user schema
   */
  forgotPassword = wrapAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      /** Get user, based on the provided email */
      const user = await this.user
        .getUserModel()
        .findOne({ email: req.body.email });

      if (!user) {
        return next(
          new ErrorHandler(404, 'No user found with this Email Address.')
        );
      }

      /** Generate reset token */
      const resetToken = user.createPasswordResetToken();

      await user.save({ validateBeforeSave: false });

      /** TODO: add email provider and send reset token as email */
      const resetURL = `${req.protocol}://${req.get(
        'host'
      )}/api/v1/auth/resetPassword/${resetToken}`;

      res.status(200).json({
        status: 'success',
        message: 'Token sent to email!',
        resetURL,
        resetToken
      });
    }
  );

  /**
   * Get reset token, validate if provided token is correct then set new password based on given body
   */
  resetPassword = wrapAsync(
    async (
      { params: { resetToken }, body, secure }: Request,
      res: Response,
      next: NextFunction
    ) => {
      if (!body.newPassword || !body.newPasswordConfirm) {
        return next(
          new ErrorHandler(
            400,
            'Please provide a new Password and a Password Confirm.'
          )
        );
      }

      /** Get user based on the provided reset token */
      const hashedToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

      const user = await this.user.getUserModel().findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() }
      });

      if (!user) {
        return next(
          new ErrorHandler(400, 'Reset Token is invalid or has expired.')
        );
      }

      /** Set new Passwords */
      user.password = body.newPassword;
      user.passwordConfirm = body.newPasswordConfirm;

      /** Set the current timestamp as passwordChangedAt prop of the user */
      user.passwordChangedAt = new Date();

      /** Remove reset Tokens from Document */
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;

      await user.save();

      /** After setting the new password log user in */
      this.createTokenWithCookieToSend(user, 200, secure, res);
    }
  );

  /**
   * Log's current user out by overriding the current
   * jwt cookie with a new expiration time.
   * @param req
   * @param res
   */
  logout = (req: Request, res: Response) => {
    const JWT_COOKIE_EXPIRES_IN = 90; //TODO: set to env variables

    res.cookie('jwt', 'loggedout', {
      expires: new Date(Date.now() + JWT_COOKIE_EXPIRES_IN + 10 * 1000),
      httpOnly: true
    });

    res.status(200).json({ status: 'success' });
  };

  /**
   * Creates the response with of type cookie with the jwt on it.
   * @param user
   * @param statusCode
   * @param secure - Is protocol https
   * @param res
   */
  private createTokenWithCookieToSend(
    user: UserDoc,
    statusCode: number,
    secure: boolean,
    res: Response
  ): void {
    const JWT_COOKIE_EXPIRES_IN = 90; //TODO: set to env variables

    /** Sign jwt */
    const token = this.auth.signToken(user._id);

    res.cookie('jwt', token, {
      expires: new Date(
        Date.now() + JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure
    });

    /** Remove password from output */
    if (user.password || user.passwordConfirm) {
      user.password = undefined;
      user.passwordConfirm = undefined;
    }

    res.status(statusCode).json({
      status: 'success',
      token,
      data: {
        user
      }
    });
  }
}

export default AuthController;
