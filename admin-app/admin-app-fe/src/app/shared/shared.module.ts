import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { TitleComponent } from './components/title/title.component';
import { StatusListItemComponent } from './components/status-list-item/status-list-item.component';

const EXPORTED_COMPONENTS = [NavbarComponent, TitleComponent, StatusListItemComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [...EXPORTED_COMPONENTS],
  exports: [...EXPORTED_COMPONENTS]
})
export class SharedModule { }
