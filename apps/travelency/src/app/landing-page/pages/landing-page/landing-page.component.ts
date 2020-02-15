import { Component } from '@angular/core';
import { TitleConfig } from '../../../shared/models/title-config.model';
import { CardUprightConfig } from '../../../shared/models/card-upright-config.model';

@Component({
  selector: 'trav-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  beachSectionTitleConfig: TitleConfig = {
    title: `Let's go to the beach`,
    subtitle: 'Beautiful Beaches',
    link: '#'
  };

  beachCardConfigs: CardUprightConfig[] = [
    {
      title: 'Majorca',
      ctaText: 'View Properties',
      backgroundImagePath: '/assets/img/cards/majorca.jpg',
      link: ''
    },

    {
      title: 'Dominician Republic',
      ctaText: 'View Properties',
      backgroundImagePath: '/assets/img/cards/dominician-republic.jpg',
      link: ''
    },
    {
      title: 'Bali',
      ctaText: 'View Properties',
      backgroundImagePath: '/assets/img/cards/bali.jpg',
      link: ''
    },
    {
      title: 'Ibiza',
      ctaText: 'View Properties',
      backgroundImagePath: '/assets/img/cards/ibiza.jpg',
      link: ''
    }
  ];
}
