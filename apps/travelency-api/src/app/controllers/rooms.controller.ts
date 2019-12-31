import { NextFunction, Request, Response } from 'express';
import Room from '../classes/Room.class';
import QueryUtils from '../utils/QueryUtils.class';
import { wrapAsync } from '../utils/error-handling.utils';
import { ErrorHandler } from '../classes/ErrorHandler.class';

class RoomsController {
  private readonly room: Room;

  constructor() {
    this.room = new Room();
  }

  /**
   * GET all rooms.
   * The data can be filtered, sorted, fields limited and
   * paginated. This functionality is provided by the `QueryUtils` Class.
   * @param query
   * @param res
   */
  getAllRooms = wrapAsync(async ({ query }: Request, res: Response) => {
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
  });

  /**
   * GET one room by it's id.
   * @param roomId
   * @param res - Response Object.
   * @param next - Expess next function.
   */
  getRoomById = wrapAsync(
    async (
      { params: { roomId } }: Request,
      res: Response,
      next: NextFunction
    ) => {
      const room = await this.room.getRoomModel().findById(roomId);

      if (!room) {
        return next(new ErrorHandler(404, 'No room with this Id found.'));
      }

      /**
       * Send Response
       */
      res.status(200).json({
        status: 'success',
        data: { room }
      });
    }
  );

  /**
   * POST create new Room.
   * @param body
   * @param res
   */
  createNewRoom = wrapAsync(async ({ body }: Request, res: Response) => {
    const newRoom = await this.room.getRoomModel().create(body); // TODO: extract only properties of createRoomDto to create param of create function

    /**
     * Send Response
     */
    res.status(201).json({
      status: 'success',
      data: { newRoom }
    });
  });

  /**
   * PATCH update existing Room by it's id.
   * @param body - Body Property of Request Object of type `CreateRoomDto`.
   * @param roomId - Desctructured `roomId` of the `Request.params` object.
   * @param res - Response Object
   */
  updateRoomById = wrapAsync(
    async (
      { params: { roomId }, body }: Request,
      res: Response,
      next: NextFunction
    ) => {
      const updatedRoom = await this.room
        .getRoomModel()
        .findByIdAndUpdate(roomId, body, {
          new: true,
          runValidators: true
        });

      if (!updatedRoom) {
        return next(new ErrorHandler(404, 'No room with this Id found.'));
      }

      /**
       * Send Response
       */
      res.status(200).json({
        status: 'success',
        data: { updatedRoom }
      });
    }
  );

  /**
   * DELETE one Room by it's id.
   * @param roomId - Desctructured `roomId` of the `Request.params` object.
   * @param res - Response Object
   * @param next - Express next function
   */
  deleteRoomById = wrapAsync(
    async (
      { params: { roomId } }: Request,
      res: Response,
      next: NextFunction
    ) => {
      const room = await this.room.getRoomModel().findByIdAndDelete(roomId);

      if (!room) {
        return next(new ErrorHandler(404, 'No room with this Id found.'));
      }

      res.status(204).json({});
    }
  );
}

export default RoomsController;
