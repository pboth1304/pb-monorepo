import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { Project } from './models/project.model';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getStatus();
  }

  @Get('projects')
  getProjects(): Project[] {
    return this.appService.getProjects();
  }
}
