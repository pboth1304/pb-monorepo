import * as passport from 'passport';
import {
  ExtractJwt,
  Strategy as JwtStrategy,
  StrategyOptions
} from 'passport-jwt';
import { environment } from '../../environments/environment';
import User from '../classes/User.class';

const strategyOptions: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: environment.JWT_SECRET_KEY,
  issuer: 'travelency-api',
  audience: 'travelency-fe'
};

passport.use(
  new JwtStrategy(strategyOptions, (payload, done) => {
    new User().getUserModel().findById({ id: payload.sub }, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);
