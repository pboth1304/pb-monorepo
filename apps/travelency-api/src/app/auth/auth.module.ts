import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { environment } from '../../environments/environment';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UserService } from '../users/services/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import UserSchema from '../users/schemas/user.schema';
@Module({
  imports: [
    JwtModule.register({ secret: environment.JWT_SECRET_KEY }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService]
})
export class AuthModule {}
