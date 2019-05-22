export interface Tag {
  name: string;
  type: TagType;
}

export type TagType = 'FRONTEND' | 'BACKEND' | 'INFRASTRUCTURE' | 'DESIGN';
