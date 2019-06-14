import { Component, OnInit } from '@angular/core';
import { RessourceListItem, FilterTag, Tag } from '@pb-monorepo/shared/models';
import { RessourcesService } from '../../services/ressources.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pb-ressources-view',
  templateUrl: './ressources-view.component.html',
  styleUrls: ['./ressources-view.component.scss']
})
export class RessourcesViewComponent implements OnInit {
  public ressourceItems: RessourceListItem[];

  public sortedRessourceItems: RessourceListItem[];

  public tags: Tag[];

  constructor(private readonly ressourcesService: RessourcesService) {}

  ngOnInit() {
    // get ressource items
    this.ressourcesService.getRessources().subscribe(ressources => {
      this.ressourceItems = ressources;

      // TODO refactor -> Observable / Behaviour subject
      this.sortedRessourceItems = this.ressourceItems;
      this.tags = this.getTags();
    });
  }

  /**
   * Filters the `ressourceItems` Array with the given `searchValue`.
   */
  public onSearch(searchValue: { search: string }): void {
    if (searchValue.search.length > 0) {
      this.sortedRessourceItems = this.ressourceItems.filter(ressourceItem =>
        ressourceItem.title
          .toLowerCase()
          .includes(searchValue.search.toLowerCase())
      );
    } else {
      this.sortedRessourceItems = this.ressourceItems;
    }
  }

  public onFilterSelect(filter: FilterTag) {
    console.log('filter', filter);
  }

  /**
   * Returns distinct Tags of Ressource Items.
   */
  public getTags(): Tag[] {
    const tags: Tag[] = [];

    /**
     * Iterate through `ressourceItems` and push every Tag
     * into the `tags` Array, if not already an equivalent Tag
     * is present there.
     */
    this.ressourceItems.forEach((ressourceItem: RessourceListItem) => {
      if (ressourceItem.tags) {
        ressourceItem.tags.forEach(resItemTag => {
          if (!tags.some(tag => tag.name === resItemTag.name)) {
            tags.push(resItemTag);
          }
        });
      }
    });

    return tags;
  }
}
