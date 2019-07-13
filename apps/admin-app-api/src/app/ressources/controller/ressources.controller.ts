import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { RessourcesService } from '../service/ressources.service';
import { CreateRessourceDto } from '../dto/create-ressource.dto';
import { RessourceModel } from '../interfaces/ressource.interface';

@Controller('ressources')
export class RessourcesController {
  constructor(private readonly ressourcesService: RessourcesService) {}

  @Get()
  public getRessources(): Promise<RessourceModel[]> {
    return this.ressourcesService.getAllRessources();
  }

  @Get(':id')
  public getRessourcesById(@Param('id') id: string): Promise<RessourceModel> {
    return this.ressourcesService.getRessourceById(id);
  }

  @Post()
  public createRessource(@Body() createRessourceDto: CreateRessourceDto): void {
    this.ressourcesService.createRessource(createRessourceDto);
  }
}
