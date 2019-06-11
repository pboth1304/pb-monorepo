import { Component, Input } from '@angular/core';
import { StatusListItem } from '../../models/status-list-item.model';

@Component({
  selector: 'pb-status-list-item',
  templateUrl: './status-list-item.component.html',
  styleUrls: ['./status-list-item.component.scss']
})
export class StatusListItemComponent {
  @Input()
  public statusListItem: StatusListItem;
}
