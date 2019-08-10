import { Controller, Get } from '@nestjs/common';
import { ApiService, Project } from './api.service';

@Controller('')
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get('projects')
  getProjects(): Project[] {
    return this.apiService.getProjects();
  }
}
