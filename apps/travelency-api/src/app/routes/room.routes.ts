import { Router } from 'express';
import Validator from '../classes/Validator.class';
import RoomsController from '../controllers/rooms.controller';
import { Route } from '@pb-monorepo/travelency/models';
import { CreateRoomDto } from '../dtos/create-room.dto';

/**
 * Put's together all Routes of the Rooms Resource.
 */
class RoomRoutes implements Route {
  private path = '/rooms';
  private roomsController: RoomsController;
  private validator: Validator;
  private readonly router: Router;

  constructor() {
    this.router = Router();
    this.roomsController = new RoomsController();
    this.validator = new Validator();
    this.initializeRoutes();
  }

  /**
   * Getter for the route path.
   */
  public getRoutePath() {
    return this.path;
  }

  /**
   * Setter for the route path.
   */
  public setRoutePath(routePath: string) {
    this.path = routePath;
  }

  /**
   * Getter for the router.
   */
  public getRouter() {
    return this.router;
  }

  /**
   * Function which initializes all routes
   * which belongs to the Room Resource.
   */
  public initializeRoutes() {
    this.router
      .route('')
      .get(this.roomsController.getAllRooms)
      .post(
        this.validator.validationMiddleware<CreateRoomDto>(CreateRoomDto),
        this.roomsController.createNewRoom
      );

    this.router
      .route('/:roomId')
      .get(this.roomsController.getRoomById)
      .patch(this.roomsController.updateRoomById)
      .delete(this.roomsController.deleteRoomById);
  }
}

export default RoomRoutes;
