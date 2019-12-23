import { Router } from 'express';
import { CreateHotelDto } from '../dtos/create-hotel.dto';
import { UpdateHotelDto } from '../dtos/update-hotel.dto';
import HotelsController from '../controllers/hotels.controller';
import Validator from '../classes/Validator.class';

/**
 * Put's together all Routes of the Hotel Ressource.
 */
class HotelRoutes {
  private path = '/hotels';
  private hotelsController: HotelsController;
  private validator: Validator;
  private readonly router: Router;

  constructor() {
    this.router = Router();
    this.hotelsController = new HotelsController();
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
  public getHotelRouter() {
    return this.router;
  }

  /**
   * Function which initializes all routes
   * which belongs to the Hotel Ressource.
   */
  public initializeRoutes() {
    this.router
      .route('')
      .get(this.hotelsController.getAllHotels)
      .post(
        this.validator.validationMiddleware<CreateHotelDto>(CreateHotelDto),
        this.hotelsController.createNewHotel
      );

    this.router
      .route('/:hotelId')
      .get(this.hotelsController.getHotelById)
      .patch(
        this.validator.validationMiddleware<UpdateHotelDto>(UpdateHotelDto),
        this.hotelsController.updateHotelById
      )
      .delete(this.hotelsController.deleteHotelById);
  }
}

export default HotelRoutes;
