import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LandingPageGlobalSearchComponent } from './components/landing-page-global-search/landing-page-global-search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LandingPageComponent,
    LandingPageGlobalSearchComponent
  ],
  imports: [CommonModule],
  exports: [LandingPageComponent]
})
export class LandingPageModule {}
