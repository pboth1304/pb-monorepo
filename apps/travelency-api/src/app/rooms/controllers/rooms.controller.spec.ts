import { Test, TestingModule } from '@nestjs/testing';
import { RoomsController } from './rooms.controller';
import { CreateRoomDto } from '../dto/create-room.dto';
import { RoomsService } from '../services/rooms.service';
import { getModelToken } from '@nestjs/mongoose';

describe('Rooms Controller', () => {
  let controller: RoomsController;
  let roomsService: RoomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomsController],
      providers: [
        RoomsService,
        {
          provide: getModelToken('Room'),
          useValue: {}
        }
      ]
    }).compile();

    roomsService = module.get<RoomsService>(RoomsService);
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
    const newRoom: CreateRoomDto = new CreateRoomDto();

    controller.createNewRoom(newRoom);
  });

  it('should update room', () => {
    const roomId = '1234';
    controller.updateRoomData(roomId, {});
  });
});
