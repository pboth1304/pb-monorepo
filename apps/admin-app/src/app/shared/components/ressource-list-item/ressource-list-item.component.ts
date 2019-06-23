import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { RessourceListItem } from '@pb-monorepo/shared/models';

@Component({
  selector: 'pb-ressource-list-item',
  templateUrl: './ressource-list-item.component.html',
  styleUrls: ['./ressource-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RessourceListItemComponent implements OnChanges {
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
