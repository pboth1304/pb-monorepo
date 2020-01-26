import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { RouterModule } from '@angular/router';
import { CardUprightComponent } from './components/card-upright/card-upright.component';

const COMPONENTS_TO_EXPORT = [TitleComponent, CardUprightComponent];

@NgModule({
  declarations: [...COMPONENTS_TO_EXPORT],
  exports: [...COMPONENTS_TO_EXPORT],
  imports: [CommonModule, RouterModule]
})
export class SharedModule {}
