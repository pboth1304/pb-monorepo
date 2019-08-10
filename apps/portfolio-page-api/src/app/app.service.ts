import { Injectable } from '@nestjs/common';
import { Project } from './models/project.model';

@Injectable()
export class AppService {
  private projects: Project[] = [
    { name: 'Ben Kolde', type: 'Mobile App Dev.' },
    { name: 'Portfolio Page', type: 'Web Development' },
    { name: 'O.A.T Portfolio Page', type: 'Webdesign' }
  ];

  public getProjects(): Project[] {
    return this.projects;
  }

  getStatus(): { status: string } {
    return { status: 'Up' };
  }
}
