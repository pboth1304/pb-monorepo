import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RessourcesViewComponent } from './components/ressources-view/ressources-view.component';
import { RouterModule } from '@angular/router';
import { ressourcesRoutes } from './ressources.routes';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, SharedModule, ReactiveFormsModule, RouterModule.forChild(ressourcesRoutes)],
  declarations: [RessourcesViewComponent, SearchComponent],
})
export class RessourcesModule {}
