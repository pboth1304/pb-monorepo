export interface Tag {
  name: string;
  type: TagType;
}

export interface FilterTag extends Tag {
  isSelected?: boolean;
}

export type TagType = 'FRONTEND' | 'BACKEND' | 'INFRASTRUCTURE' | 'DESIGN' | 'ARCHITECTURE';
