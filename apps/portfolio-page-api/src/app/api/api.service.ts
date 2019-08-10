import { Injectable } from '@nestjs/common';

export interface Project {
  name: string;
  type: ProjectType;
  description?: string;
}

export type ProjectType =
  | 'Mobile App Dev.'
  | 'Web Development'
  | 'Webdesign'
  | 'UI Design';

@Injectable()
export class ApiService {
  private projects: Project[] = [
    { name: 'Ben Kolde', type: 'Mobile App Dev.' },
    { name: 'Portfolio Page', type: 'Web Development' },
    { name: 'O.A.T Portfolio Page', type: 'Webdesign' }
  ];

  public getProjects(): Project[] {
    return this.projects;
  }
}
