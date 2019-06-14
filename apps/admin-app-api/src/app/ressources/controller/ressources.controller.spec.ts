import { Test, TestingModule } from '@nestjs/testing';
import { RessourcesController } from './ressources.controller';

describe('Ressources Controller', () => {
  let controller: RessourcesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RessourcesController],
    }).compile();

    controller = module.get<RessourcesController>(RessourcesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
