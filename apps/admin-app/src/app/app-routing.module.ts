import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'status',
    loadChildren: () =>
      import('./status/status.module').then(m => m.StatusModule)
  },
  {
    path: 'ressources',
    loadChildren: () =>
      import('./ressources/ressources.module').then(m => m.RessourcesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
