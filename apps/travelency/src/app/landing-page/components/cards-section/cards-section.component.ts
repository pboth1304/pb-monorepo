import { Component, Input } from '@angular/core';
import { TitleConfig } from '../../../shared/models/title-config.model';
import { CardUprightConfig } from '../../../shared/models/card-upright-config.model';

@Component({
  selector: 'trav-cards-section',
  templateUrl: './cards-section.component.html',
  styleUrls: ['./cards-section.component.scss']
})
export class CardsSectionComponent {
  @Input() titleConfig: TitleConfig;
  @Input() cards: CardUprightConfig[];
}
