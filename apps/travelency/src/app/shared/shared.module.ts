import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { RouterModule } from '@angular/router';
import { CardUprightComponent } from './components/card-upright/card-upright.component';
import { NavigationComponent } from './components/navigation/navigation.component';

const COMPONENTS_TO_EXPORT = [
  TitleComponent,
  CardUprightComponent,
  NavigationComponent
];

@NgModule({
  declarations: [...COMPONENTS_TO_EXPORT, NavigationComponent],
  exports: [...COMPONENTS_TO_EXPORT, NavigationComponent],
  imports: [CommonModule, RouterModule]
})
export class SharedModule {}
