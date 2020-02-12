import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'trav-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  @Input() isLoggedIn: boolean;
  @Input() mainNavIsShown: boolean;
}
