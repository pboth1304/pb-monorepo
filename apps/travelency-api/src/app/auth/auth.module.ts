import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { environment } from '../../environments/environment';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UserService } from '../users/services/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import UserSchema from '../users/schemas/user.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './passport-strategies/jwt.strategy';
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: environment.JWT_SECRET_KEY,
      signOptions: { expiresIn: environment.JWT_EXPIRES_IN }
    }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtStrategy]
})
export class AuthModule {}
