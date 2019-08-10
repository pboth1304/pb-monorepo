import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pb-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  @Input() backgroundIsDark: boolean;

  closeNav() {
    console.log('close');
  }
}
