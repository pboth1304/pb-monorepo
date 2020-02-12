import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/pages/landing-page/landing-page.component';

@Component({ template: 'Test' })
export class Dummy {}

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  { path: 'tours', component: Dummy }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled'
    })
  ],
  declarations: [Dummy],
  exports: [RouterModule]
})
export class AppRoutingModule {}
