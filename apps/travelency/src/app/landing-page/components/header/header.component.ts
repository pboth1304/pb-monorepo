import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardUprightConfig } from '../../../shared/models/card-upright-config.model';
import { TitleConfig } from '../../../shared/models/title-config.model';

@Component({
  selector: 'trav-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  citiesCardConfigs: CardUprightConfig[] = [
    {
      title: 'Berlin',
      ctaText: 'View Properties',
      backgroundImagePath: '/assets/img/cards/berlin.jpg',
      link: ''
    },
    {
      title: 'Paris',
      ctaText: 'View Properties',
      backgroundImagePath: '/assets/img/cards/paris.jpg',
      link: ''
    },
    {
      title: 'Lisbon',
      ctaText: 'View Properties',
      backgroundImagePath: '/assets/img/cards/lisbon.jpg',
      link: ''
    },
    {
      title: 'Barcelona',
      ctaText: 'View Properties',
      backgroundImagePath: '/assets/img/cards/barcelona.jpg',
      link: ''
    }
  ];

  titleConfig: TitleConfig = {
    title: 'Some of our favorites',
    subtitle: 'Cities',
    link: '#'
  };
}
