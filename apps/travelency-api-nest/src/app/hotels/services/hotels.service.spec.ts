import { Test, TestingModule } from '@nestjs/testing';
import { HotelsService } from './hotels.service';
import { getModelToken } from '@nestjs/mongoose';

describe('HotelsService', () => {
  let service: HotelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HotelsService,
        {
          provide: getModelToken('Hotel'),
          useValue: {}
        }
      ]
    }).compile();

    service = module.get<HotelsService>(HotelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
