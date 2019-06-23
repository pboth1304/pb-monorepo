import { Injectable } from '@nestjs/common';
import { RessourceListItem } from '@pb-monorepo/shared/models';

@Injectable()
export class RessourcesService {
  private ressourceListItems: RessourceListItem[] = [
    {
      id: '1',
      title: 'Was sind eigentlich Microservices?',
      description: 'Artikel über Microservices.',
      link: 'https://jaxenter.de/was-sind-microservices-40571',
      tags: [{ name: 'Microservices', type: 'ARCHITECTURE' }]
    },
    {
      id: '2',
      title: 'JavaScript Reference',
      description: 'MDN Javascript Reference.',
      link:
        // tslint:disable-next-line:max-line-length
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fbloximages.chicago2.vip.townnews.com%2Ftribdem.com%2Fcontent%2Ftncms%2Fassets%2Fv3%2Feditorial%2F3%2F83%2F38384be2-3ba5-11e8-adec-bf48bc62810f%2F5acadc92f3c7d.image.jpg%3Fresize%3D400%252C357&imgrefurl=https%3A%2F%2Fwww.tribdem.com%2Fnews%2Fpicture-this-bird-shot-captures-photo-contest%2Farticle_a2abf2e0-3ba4-11e8-9bb1-db22bf6445d7.html&docid=SutITo_llO4YrM&tbnid=6kCbaTVHeX88EM%3A&vet=10ahUKEwjs8eL1_K_iAhUOMuwKHUfhAYkQMwhnKAEwAQ..i&w=400&h=357&bih=969&biw=1920&q=picture&ved=0ahUKEwjs8eL1_K_iAhUOMuwKHUfhAYkQMwhnKAEwAQ&iact=mrc&uact=8',
      tags: [{ name: 'JavaScript', type: 'FRONTEND' }]
    },
    {
      id: '3',
      title: 'C# Reference',
      description: 'MDN C# Reference.',
      link:
        // tslint:disable-next-line:max-line-length
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fbloximages.chicago2.vip.townnews.com%2Ftribdem.com%2Fcontent%2Ftncms%2Fassets%2Fv3%2Feditorial%2F3%2F83%2F38384be2-3ba5-11e8-adec-bf48bc62810f%2F5acadc92f3c7d.image.jpg%3Fresize%3D400%252C357&imgrefurl=https%3A%2F%2Fwww.tribdem.com%2Fnews%2Fpicture-this-bird-shot-captures-photo-contest%2Farticle_a2abf2e0-3ba4-11e8-9bb1-db22bf6445d7.html&docid=SutITo_llO4YrM&tbnid=6kCbaTVHeX88EM%3A&vet=10ahUKEwjs8eL1_K_iAhUOMuwKHUfhAYkQMwhnKAEwAQ..i&w=400&h=357&bih=969&biw=1920&q=picture&ved=0ahUKEwjs8eL1_K_iAhUOMuwKHUfhAYkQMwhnKAEwAQ&iact=mrc&uact=8',
      tags: [{ name: 'JavaScript', type: 'FRONTEND' }]
    },
    {
      id: '4',
      title: 'Java Reference',
      description: 'MDN Java Reference.',
      link:
        // tslint:disable-next-line:max-line-length
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fbloximages.chicago2.vip.townnews.com%2Ftribdem.com%2Fcontent%2Ftncms%2Fassets%2Fv3%2Feditorial%2F3%2F83%2F38384be2-3ba5-11e8-adec-bf48bc62810f%2F5acadc92f3c7d.image.jpg%3Fresize%3D400%252C357&imgrefurl=https%3A%2F%2Fwww.tribdem.com%2Fnews%2Fpicture-this-bird-shot-captures-photo-contest%2Farticle_a2abf2e0-3ba4-11e8-9bb1-db22bf6445d7.html&docid=SutITo_llO4YrM&tbnid=6kCbaTVHeX88EM%3A&vet=10ahUKEwjs8eL1_K_iAhUOMuwKHUfhAYkQMwhnKAEwAQ..i&w=400&h=357&bih=969&biw=1920&q=picture&ved=0ahUKEwjs8eL1_K_iAhUOMuwKHUfhAYkQMwhnKAEwAQ&iact=mrc&uact=8'
    },
    {
      id: '5',
      title: 'TypeScript Reference',
      description: 'MDN TypeScript Reference.',
      link:
        // tslint:disable-next-line:max-line-length
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fbloximages.chicago2.vip.townnews.com%2Ftribdem.com%2Fcontent%2Ftncms%2Fassets%2Fv3%2Feditorial%2F3%2F83%2F38384be2-3ba5-11e8-adec-bf48bc62810f%2F5acadc92f3c7d.image.jpg%3Fresize%3D400%252C357&imgrefurl=https%3A%2F%2Fwww.tribdem.com%2Fnews%2Fpicture-this-bird-shot-captures-photo-contest%2Farticle_a2abf2e0-3ba4-11e8-9bb1-db22bf6445d7.html&docid=SutITo_llO4YrM&tbnid=6kCbaTVHeX88EM%3A&vet=10ahUKEwjs8eL1_K_iAhUOMuwKHUfhAYkQMwhnKAEwAQ..i&w=400&h=357&bih=969&biw=1920&q=picture&ved=0ahUKEwjs8eL1_K_iAhUOMuwKHUfhAYkQMwhnKAEwAQ&iact=mrc&uact=8'
    }
  ];

  /**
   * Returns all Ressource Items.
   */
  public getRessourceListItems(): RessourceListItem[] {
    return this.ressourceListItems;
  }

  /**
   * Returns Ressource List Item by Id.
   */
  public getRessourceListItemById(id: string): RessourceListItem {
    const i = this.ressourceListItems.findIndex(item => item.id === id);
    return this.ressourceListItems[i];
  }

  public createRessource(ressource: RessourceListItem): string {
    const id = '4';
    const newRessource: RessourceListItem = { ...ressource, id };
    this.ressourceListItems = [...this.ressourceListItems, newRessource];
    return newRessource.id;
  }
}
