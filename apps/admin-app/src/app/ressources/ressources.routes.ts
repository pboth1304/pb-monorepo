import { Routes } from '@angular/router';
import { RessourcesViewComponent } from './components/ressources-view/ressources-view.component';
import { RessourceDetailComponent } from './components/ressource-detail/ressource-detail.component';

export const ressourcesRoutes: Routes = [
  {
    path: '',
    component: RessourcesViewComponent
  },
  {
    path: ':ressourceId',
    component: RessourceDetailComponent
  }
];
