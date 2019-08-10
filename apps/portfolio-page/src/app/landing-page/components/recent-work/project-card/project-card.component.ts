import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pb-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCardComponent {
  @Input() projectType: string;
  @Input() projectTitle: string;
  @Input() backImgName: string;

  get backgroundImg() {
    // tslint:disable-next-line:max-line-length
    return {
      'background-image': `linear-gradient(to bottom, rgba(64, 64, 64, .75) 60%, rgba(0, 212, 218, .6) 120%), url('/assets/img/${
        this.backImgName
      }')`
    };
  }
}
