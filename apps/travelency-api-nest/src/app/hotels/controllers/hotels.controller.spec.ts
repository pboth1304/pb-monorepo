import { Test, TestingModule } from '@nestjs/testing';
import { HotelsController } from './hotels.controller';
import { HotelsService } from '../services/hotels.service';
import { getModelToken } from '@nestjs/mongoose';

describe('Hotels Controller', () => {
  let controller: HotelsController;
  let hotelsService: HotelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotelsController],
      providers: [
        HotelsService,
        {
          provide: getModelToken('Hotel'),
          useValue: {}
        }
      ]
    }).compile();

    hotelsService = module.get<HotelsService>(HotelsService);
    controller = module.get<HotelsController>(HotelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
