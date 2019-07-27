import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { TitleComponent } from './components/title/title.component';
import { StatusListItemComponent } from './components/status-list-item/status-list-item.component';
import { RessourceListItemComponent } from './components/ressource-list-item/ressource-list-item.component';
import { SubnavComponent } from './components/subnav/subnav.component';
import { ReactiveFormsModule } from '@angular/forms';

const EXPORTED_COMPONENTS = [
  NavbarComponent,
  TitleComponent,
  StatusListItemComponent,
  RessourceListItemComponent,
  SubnavComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [...EXPORTED_COMPONENTS],
  exports: [...EXPORTED_COMPONENTS]
})
export class SharedModule {}
