import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LandingPageGlobalSearchComponent } from './components/landing-page-global-search/landing-page-global-search.component';
import { SharedModule } from '../shared/shared.module';
import { SpotlightSectionComponent } from './components/spotlight-section/spotlight-section.component';
import { BeachDestinationsSectionComponent } from './components/beach-destinations-section/beach-destinations-section.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LandingPageComponent,
    LandingPageGlobalSearchComponent,
    SpotlightSectionComponent,
    BeachDestinationsSectionComponent
  ],
  imports: [CommonModule, SharedModule],
  exports: [LandingPageComponent]
})
export class LandingPageModule {}
