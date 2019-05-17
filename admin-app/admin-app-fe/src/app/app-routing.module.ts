import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'status', loadChildren: './status/status.module#StatusModule'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
