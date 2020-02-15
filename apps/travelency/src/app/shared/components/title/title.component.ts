import { Component, Input } from '@angular/core';
import { TitleConfig } from '../../models/title-config.model';

@Component({
  selector: 'trav-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() titleConfig: TitleConfig;
}
