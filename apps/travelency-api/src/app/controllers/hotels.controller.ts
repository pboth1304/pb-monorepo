import { Request, Response, Router } from 'express';
import Hotel from '../classes/hotel.class';
import slugify from 'slugify';

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
      .patch(this.updateHotelById);
  }

  /**
   * GET all hotels.
   * @param req - Request Object
   * @param res - Response Object
   */
  getAllHotels = async (req: Request, res: Response): Promise<void> => {
    const hotels = await this.hotel.getHotelModel().find();

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
   * @param params - destructured params object of the Express Request Object.
   * @param res - Response Object
   */
  getHotelById = async ({ params }: Request, res: Response): Promise<void> => {
    const { hotelId } = params;

    // return Hotel.findById(hotelId).populate('rooms');
    const hotel = await this.hotel.getHotelModel().findById(hotelId);

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
}

export default HotelsController;
