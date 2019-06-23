import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { RessourcesService } from '../service/ressources.service';
import { RessourceListItem } from '@pb-monorepo/shared/models';

@Controller('ressources')
export class RessourcesController {
  constructor(private readonly ressourcesService: RessourcesService) {}

  @Get()
  public getRessources(): RessourceListItem[] {
    return this.ressourcesService.getRessourceListItems();
  }

  @Get(':id')
  public getRessourcesById(@Param('id') id: string): RessourceListItem {
    return this.ressourcesService.getRessourceListItemById(id);
  }

  @Post()
  public createRessource(@Body() ressource: RessourceListItem): string {
    return this.ressourcesService.createRessource(ressource);
  }
}
