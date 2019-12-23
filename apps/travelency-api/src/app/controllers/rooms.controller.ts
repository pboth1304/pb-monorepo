import { Request, Response, Router } from 'express';
import Room from '../classes/Room.class';
import QueryUtils from '../utils/QueryUtils.class';
import Validator from '../classes/Validator.class';
import { CreateRoomDto } from '../dtos/create-room.dto';

class RoomsController {
  public path = '/rooms';
  public router = Router();
  private readonly room: Room;
  private readonly validator: Validator;

  constructor() {
    this.room = new Room();
    this.validator = new Validator();

    this.initializeRoutes();
  }

  /**
   * Function which initializes all routes
   * of the `RoomController`.
   */
  public initializeRoutes() {
    this.router
      .route('')
      .get(this.getAllRooms)
      .post(
        this.validator.validationMiddleware<CreateRoomDto>(CreateRoomDto),
        this.createNewRoom
      );

    this.router
      .route('/:roomId')
      .get(this.getRoomById)
      .patch(this.updateRoomById)
      .delete(this.deleteRoomById);
  }

  /**
   * GET all rooms.
   * The data can be filtered, sorted, fields limited and
   * paginated. This functionality is provided by the `QueryUtils` Class.
   * @param query
   * @param res
   */
  getAllRooms = async ({ query }: Request, res: Response) => {
    const queryUtils = new QueryUtils(this.room.getRoomModel(), query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const rooms = await queryUtils.model;

    /**
     * Send Response
     */
    res.status(200).json({
      status: 'success',
      results: rooms.length,
      data: { rooms }
    });
  };

  /**
   * GET one room by it's id.
   * @param roomId
   * @param res
   */
  getRoomById = async ({ params: { roomId } }: Request, res: Response) => {
    const room = await this.room.getRoomModel().findById(roomId);

    /**
     * Send Response
     */
    res.status(200).json({
      status: 'success',
      data: { room }
    });
  };

  /**
   * POST create new Room.
   * @param body
   * @param res
   */
  createNewRoom = async ({ body }: Request, res: Response) => {
    const newRoom = await this.room.getRoomModel().create(body); // TODO: add dto

    /**
     * Send Response
     */
    res.status(201).json({
      status: 'success',
      data: { newRoom }
    });
  };

  /**
   * PATCH update existing Room by it's id.
   * @param body - Body Property of Request Object of type `CreateRoomDto`.
   * @param roomId - Desctructured `roomId` of the `Request.params` object.
   * @param res - Response Object
   */
  updateRoomById = async (
    { params: { roomId }, body }: Request,
    res: Response
  ) => {
    const updatedRoom = await this.room
      .getRoomModel()
      .findByIdAndUpdate(roomId, body, {
        new: true,
        runValidators: true
      });

    /**
     * Send Response
     */
    res.status(200).json({
      status: 'success',
      data: { updatedRoom }
    });
  };

  /**
   * DELETE one Room by it's id.
   * @param roomId - Desctructured `roomId` of the `Request.params` object.
   * @param res - Response Object
   * @param next - Express next function
   */
  deleteRoomById = async ({ params: { roomId } }: Request, res: Response) => {
    const room = await this.room.getRoomModel().findByIdAndDelete(roomId);

    if (!room) {
      res
        .status(404)
        .json({ status: 'error', message: 'No Room with this id found!' });
    }

    res.status(204);
  };
}

export default RoomsController;
