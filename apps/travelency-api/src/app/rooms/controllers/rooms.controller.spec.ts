import { Test, TestingModule } from '@nestjs/testing';
import { RoomsController } from './rooms.controller';

describe('Rooms Controller', () => {
  let controller: RoomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomsController]
    }).compile();

    controller = module.get<RoomsController>(RoomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get all rooms', () => {
    controller.getAllRooms({});
  });

  it('should get room by id', () => {
    const roomId = '1234';
    controller.getRoomById(roomId);
  });

  it('should create new room', () => {
    controller.createNewRoom({});
  });

  it('should update room', () => {
    const roomId = '1234';
    controller.updateRoomData(roomId, {});
  });
});
