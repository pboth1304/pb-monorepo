import { Test, TestingModule } from '@nestjs/testing';
import { RoomsService } from './rooms.service';
import { getModelToken } from '@nestjs/mongoose';

describe('RoomsService', () => {
  let service: RoomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RoomsService,
        {
          provide: getModelToken('Room'),
          useValue: {}
        }
      ]
    }).compile();

    service = module.get<RoomsService>(RoomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
