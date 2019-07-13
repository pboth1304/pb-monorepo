import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RessourceModel } from '../interfaces/ressource.interface';
import { CreateRessourceDto } from '../dto/create-ressource.dto';

@Injectable()
export class RessourcesService {
  private readonly logger = new Logger(RessourcesService.name);

  constructor(
    @InjectModel('Ressource')
    private readonly ressourceModel: Model<RessourceModel>
  ) {}

  public async createRessource(
    createRessourceDto: CreateRessourceDto
  ): Promise<RessourceModel> {
    const createdRessource = new this.ressourceModel(createRessourceDto);
    this.logger.log('createdRessource', createdRessource.toString());
    return await createdRessource.save();
  }

  /**
   * Returns all Ressources.
   */
  public async getAllRessources(): Promise<RessourceModel[]> {
    return await this.ressourceModel.find().exec();
  }

  /**
   * Returns Ressource by Id.
   */
  public async getRessourceById(id: string): Promise<RessourceModel> {
    return await this.ressourceModel.findById(id);
  }
}
