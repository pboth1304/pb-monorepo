import { Tag } from './tag.model';

export interface RessourceListItem {
  id?: string;
  title: string;
  description: string;
  link: string;
  tags?: Tag[];
}
