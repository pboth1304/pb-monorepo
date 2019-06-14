import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { RessourceListItem } from '@pb-monorepo/shared/models';

@Component({
  selector: 'pb-ressource-list-items',
  templateUrl: './ressource-list-items.component.html',
  styleUrls: ['./ressource-list-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RessourceListItemsComponent implements OnChanges {
  @Input()
  public ressourceListItem: RessourceListItem;

  public trimmedLink: string;

  ngOnChanges(change: SimpleChanges) {
    if (change['ressourceListItem']) {
      this.trimmedLink =
        this.ressourceListItem.link.length > 60
          ? `${this.ressourceListItem.link.substring(0, 60)}...`
          : this.ressourceListItem.link;
    }
  }
}
