import { Tag } from './tag.model';

export interface RessourceListItem {
  title: string;
  description: string;
  link: string;
  tags?: Tag[];
}
