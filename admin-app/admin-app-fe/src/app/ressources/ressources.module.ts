import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RessourcesViewComponent } from './components/ressources-view/ressources-view.component';
import { RouterModule } from '@angular/router';
import { ressourcesRoutes } from './ressources.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ressourcesRoutes)
  ],
  declarations: [
    RessourcesViewComponent
  ]
})
export class RessourcesModule { }
