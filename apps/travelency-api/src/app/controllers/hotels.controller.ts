import { NextFunction, Request, Response, Router } from 'express';
import Hotel from '../classes/Hotel.class';
import slugify from 'slugify';
import QueryUtils from '../utils/QueryUtils.class';
import { Auth } from '../classes/Auth.class';

class HotelsController {
  public path = '/hotels';
  public router = Router();
  private readonly hotel: Hotel;

  constructor() {
    this.hotel = new Hotel();
    this.initializeRoutes();
  }

  /**
   * Function which initializes all routes
   * of the `HotelController`.
   */
  public initializeRoutes() {
    this.router
      .route('')
      .get(this.getAllHotels)
      .post(this.createNewHotel);

    this.router
      .route('/:hotelId')
      .get(this.getHotelById)
      .patch(this.updateHotelById)
      .delete(this.deleteHotelById);
  }

  /**
   * GET all hotels.
   * The data can be filtered, sorted, fields limited and
   * paginated. This functionality is provided by the `QueryUtils` Class.
   * @param req - Request Object
   * @param res - Response Object
   */
  getAllHotels = async ({ query }: Request, res: Response): Promise<void> => {
    const queryUtils = new QueryUtils(this.hotel.getHotelModel(), query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const hotels = await queryUtils.model;

    /**
     * Send Response
     */
    res.status(200).json({
      status: 'success',
      results: hotels.length,
      data: { hotels }
    });
  };

  /**
   * GET one hotel by it's id.
   * @param hotelId - destructured hotelId object of the `Request.params` Object.
   * @param res - Response Object
   */
  getHotelById = async (
    { params: { hotelId } }: Request,
    res: Response
  ): Promise<void> => {
    const hotel = await this.hotel
      .getHotelModel()
      .findById(hotelId)
      .populate('rooms');

    /**
     * Send Response
     */
    res.status(200).json({
      status: 'success',
      data: { hotel }
    });
  };

  /**
   * POST create new Hotel.
   * @param body - Body Property of Request Object of type `CreateHotelDto`.
   * @param res - Response Object
   */
  createNewHotel = async ({ body }: Request, res: Response) => {
    const newHotel = await this.hotel.getHotelModel().create(body); // TODO: add dto

    /**
     * Send Response
     */
    res.status(201).json({
      status: 'success',
      data: { newHotel }
    });
  };

  /**
   * PATCH update existing Hotel by it's id.
   * @param body - Body Property of Request Object of type `CreateHotelDto`.
   * @param hotelId - Desctructured `hotelId` of the `Request.params` object.
   * @param res - Response Object
   */
  updateHotelById = async (
    { body, params: { hotelId } }: Request,
    res: Response
  ) => {
    let hotelToUpdate = body;

    // If the given data has a property ´name´ then set the new slug based on the name property.
    if (hotelToUpdate['name']) {
      const newSlug = slugify(hotelToUpdate.name, { lower: true });
      hotelToUpdate = { ...hotelToUpdate, slug: newSlug };
    }

    const updatedHotel = await this.hotel
      .getHotelModel()
      .findByIdAndUpdate(hotelId, hotelToUpdate, {
        new: true,
        runValidators: true
      });

    /**
     * Send Response
     */
    res.status(200).json({
      status: 'success',
      data: { updatedHotel }
    });
  };

  /**
   * DELETE one Hotel by it's id.
   * @param hotelId - Desctructured `hotelId` of the `Request.params` object.
   * @param res - Response Object
   * @param next - Express next function
   */
  deleteHotelById = async (
    { params: { hotelId } }: Request,
    res: Response,
    next: NextFunction
  ) => {
    const hotel = await this.hotel.getHotelModel().findByIdAndDelete(hotelId);

    if (!hotel) {
      res
        .status(404)
        .json({ status: 'error', message: 'No Hotel with this id found!' });
    }

    res.status(204);
  };
}

export default HotelsController;
