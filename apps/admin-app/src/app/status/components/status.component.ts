import { Component, OnInit } from '@angular/core';
import { StatusListItem } from '@pb-monorepo/models';

@Component({
  selector: 'pb-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  public statusListItem: StatusListItem = {
    serviceTitle: 'Website',
    serviceDescription: 'Portfolio Page of me.',
    lastStatusCheck: new Date(),
    status: 'Online'
  };

  constructor() {}

  ngOnInit() {}
}
