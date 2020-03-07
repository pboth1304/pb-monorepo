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
