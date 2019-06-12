import { Component, OnInit } from '@angular/core';
import { RessourceListItem, FilterTag, Tag } from '@pb-monorepo/models';

@Component({
  selector: 'pb-ressources-view',
  templateUrl: './ressources-view.component.html',
  styleUrls: ['./ressources-view.component.scss']
})
export class RessourcesViewComponent implements OnInit {
  public ressourceItems: RessourceListItem[] = [
    {
      title: 'Was sind eigentlich Microservices?',
      description: 'Artikel über Microservices.',
      link: 'https://jaxenter.de/was-sind-microservices-40571',
      tags: [{ name: 'Microservices', type: 'ARCHITECTURE' }]
    },
    {
      title: 'JavaScript Reference',
      description: 'MDN Javascript Reference.',
      link:
        // tslint:disable-next-line:max-line-length
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fbloximages.chicago2.vip.townnews.com%2Ftribdem.com%2Fcontent%2Ftncms%2Fassets%2Fv3%2Feditorial%2F3%2F83%2F38384be2-3ba5-11e8-adec-bf48bc62810f%2F5acadc92f3c7d.image.jpg%3Fresize%3D400%252C357&imgrefurl=https%3A%2F%2Fwww.tribdem.com%2Fnews%2Fpicture-this-bird-shot-captures-photo-contest%2Farticle_a2abf2e0-3ba4-11e8-9bb1-db22bf6445d7.html&docid=SutITo_llO4YrM&tbnid=6kCbaTVHeX88EM%3A&vet=10ahUKEwjs8eL1_K_iAhUOMuwKHUfhAYkQMwhnKAEwAQ..i&w=400&h=357&bih=969&biw=1920&q=picture&ved=0ahUKEwjs8eL1_K_iAhUOMuwKHUfhAYkQMwhnKAEwAQ&iact=mrc&uact=8',
      tags: [{ name: 'JavaScript', type: 'FRONTEND' }]
    },
    {
      title: 'C# Reference',
      description: 'MDN C# Reference.',
      link:
        // tslint:disable-next-line:max-line-length
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fbloximages.chicago2.vip.townnews.com%2Ftribdem.com%2Fcontent%2Ftncms%2Fassets%2Fv3%2Feditorial%2F3%2F83%2F38384be2-3ba5-11e8-adec-bf48bc62810f%2F5acadc92f3c7d.image.jpg%3Fresize%3D400%252C357&imgrefurl=https%3A%2F%2Fwww.tribdem.com%2Fnews%2Fpicture-this-bird-shot-captures-photo-contest%2Farticle_a2abf2e0-3ba4-11e8-9bb1-db22bf6445d7.html&docid=SutITo_llO4YrM&tbnid=6kCbaTVHeX88EM%3A&vet=10ahUKEwjs8eL1_K_iAhUOMuwKHUfhAYkQMwhnKAEwAQ..i&w=400&h=357&bih=969&biw=1920&q=picture&ved=0ahUKEwjs8eL1_K_iAhUOMuwKHUfhAYkQMwhnKAEwAQ&iact=mrc&uact=8',
      tags: [{ name: 'JavaScript', type: 'FRONTEND' }]
    },
    {
      title: 'Java Reference',
      description: 'MDN Java Reference.',
      link:
        // tslint:disable-next-line:max-line-length
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fbloximages.chicago2.vip.townnews.com%2Ftribdem.com%2Fcontent%2Ftncms%2Fassets%2Fv3%2Feditorial%2F3%2F83%2F38384be2-3ba5-11e8-adec-bf48bc62810f%2F5acadc92f3c7d.image.jpg%3Fresize%3D400%252C357&imgrefurl=https%3A%2F%2Fwww.tribdem.com%2Fnews%2Fpicture-this-bird-shot-captures-photo-contest%2Farticle_a2abf2e0-3ba4-11e8-9bb1-db22bf6445d7.html&docid=SutITo_llO4YrM&tbnid=6kCbaTVHeX88EM%3A&vet=10ahUKEwjs8eL1_K_iAhUOMuwKHUfhAYkQMwhnKAEwAQ..i&w=400&h=357&bih=969&biw=1920&q=picture&ved=0ahUKEwjs8eL1_K_iAhUOMuwKHUfhAYkQMwhnKAEwAQ&iact=mrc&uact=8'
    },
    {
      title: 'TypeScript Reference',
      description: 'MDN TypeScript Reference.',
      link:
        // tslint:disable-next-line:max-line-length
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fbloximages.chicago2.vip.townnews.com%2Ftribdem.com%2Fcontent%2Ftncms%2Fassets%2Fv3%2Feditorial%2F3%2F83%2F38384be2-3ba5-11e8-adec-bf48bc62810f%2F5acadc92f3c7d.image.jpg%3Fresize%3D400%252C357&imgrefurl=https%3A%2F%2Fwww.tribdem.com%2Fnews%2Fpicture-this-bird-shot-captures-photo-contest%2Farticle_a2abf2e0-3ba4-11e8-9bb1-db22bf6445d7.html&docid=SutITo_llO4YrM&tbnid=6kCbaTVHeX88EM%3A&vet=10ahUKEwjs8eL1_K_iAhUOMuwKHUfhAYkQMwhnKAEwAQ..i&w=400&h=357&bih=969&biw=1920&q=picture&ved=0ahUKEwjs8eL1_K_iAhUOMuwKHUfhAYkQMwhnKAEwAQ&iact=mrc&uact=8'
    }
  ];

  public sortedRessourceItems: RessourceListItem[];

  public tags: Tag[];

  ngOnInit() {
    this.sortedRessourceItems = this.ressourceItems;
    this.tags = this.getTags();
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
