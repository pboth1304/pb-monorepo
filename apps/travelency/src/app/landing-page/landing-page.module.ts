import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@NgModule({
  declarations: [HeaderComponent, LandingPageComponent],
  imports: [CommonModule],
  exports: [LandingPageComponent]
})
export class LandingPageModule {}
