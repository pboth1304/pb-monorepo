import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent {
  @Input()
  public title: string;

  @Input()
  public subtitle: string;
}
