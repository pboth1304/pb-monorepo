import { Controller, Get, Param } from '@nestjs/common';
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
  public getRessourcesById(@Param('id') id: string): RessourceListItem[] {
    return this.ressourcesService.getRessourceListItemById(id);
  }
}
