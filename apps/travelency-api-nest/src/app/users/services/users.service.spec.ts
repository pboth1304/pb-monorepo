import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './users.service';
import { getModelToken } from '@nestjs/mongoose';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken('Room'),
          useValue: {}
        }
      ]
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
