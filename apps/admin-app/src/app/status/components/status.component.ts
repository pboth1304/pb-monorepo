import { Component } from '@angular/core';
import { StatusListItem } from '@pb-monorepo/shared/models';

@Component({
  selector: 'pb-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  public statusListItem: StatusListItem = {
    serviceTitle: 'Website',
    serviceDescription: 'Portfolio Page of me.',
    lastStatusCheck: new Date(),
    status: 'Online'
  };
}
