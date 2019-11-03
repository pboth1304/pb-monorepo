import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { getModelToken } from '@nestjs/mongoose';
import { UsersService } from '../services/users.service';

describe('Users Controller', () => {
  let controller: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: getModelToken('User'),
          useValue: {}
        }
      ]
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
