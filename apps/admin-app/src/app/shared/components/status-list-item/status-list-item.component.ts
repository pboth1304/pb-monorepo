import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { StatusListItem } from '@pb-monorepo/shared/models';

@Component({
  selector: 'pb-status-list-item',
  templateUrl: './status-list-item.component.html',
  styleUrls: ['./status-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusListItemComponent {
  @Input()
  public statusListItem: StatusListItem;
}
