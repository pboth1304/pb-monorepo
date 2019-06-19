import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { TitleComponent } from './components/title/title.component';
import { StatusListItemComponent } from './components/status-list-item/status-list-item.component';
import { RessourceListItemsComponent } from './components/ressource-list-items/ressource-list-items.component';
import { SubnavComponent } from './components/subnav/subnav.component';
import { ReactiveFormsModule } from '@angular/forms';

const EXPORTED_COMPONENTS = [
  NavbarComponent,
  TitleComponent,
  StatusListItemComponent,
  RessourceListItemsComponent,
  SubnavComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [...EXPORTED_COMPONENTS],
  exports: [...EXPORTED_COMPONENTS]
})
export class SharedModule {}
