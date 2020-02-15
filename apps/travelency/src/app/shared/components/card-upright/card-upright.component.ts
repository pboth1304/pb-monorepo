import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardUprightConfig } from '../../models/card-upright-config.model';

@Component({
  selector: 'trav-card-upright',
  templateUrl: './card-upright.component.html',
  styleUrls: ['./card-upright.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardUprightComponent {
  @Input() cardConfig: CardUprightConfig;

  LINEAR_GRADIENT_BLACK = 'linear-gradient(to right, rgba(0,0,0,0.36), rgba(0,0,0,0.36)),'
}
