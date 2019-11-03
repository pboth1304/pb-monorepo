import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './auth.controller';
import { getModelToken } from '@nestjs/mongoose';
import { AuthService } from '../services/auth.service';

describe('Users Controller', () => {
  let controller: UsersController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        AuthService,
        {
          provide: getModelToken('User'),
          useValue: {}
        }
      ]
    }).compile();

    authService = module.get<AuthService>(AuthService);
    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
