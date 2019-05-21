import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RessourcesViewComponent } from './components/ressources-view/ressources-view.component';
import { RouterModule } from '@angular/router';
import { ressourcesRoutes } from './ressources.routes';
import { SharedModule } from '../shared/shared.module';
import { RessourceListItemsComponent } from './components/ressource-list-items/ressource-list-items.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ressourcesRoutes)
  ],
  declarations: [
    RessourcesViewComponent,
    RessourceListItemsComponent,
    SearchComponent
  ]
})
export class RessourcesModule { }
