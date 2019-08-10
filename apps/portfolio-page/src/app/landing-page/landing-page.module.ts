import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { landingPageRoutes } from './landing-page.routes';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from '../shared/shared.module';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ProjectCardComponent } from './components/recent-work/project-card/project-card.component';
import { RecentWorkComponent } from './components/recent-work/recent-work.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(landingPageRoutes),
    SharedModule
  ],
  declarations: [
    LandingPageComponent,
    HeaderComponent,
    ProjectCardComponent,
    AboutComponent,
    TechStackComponent,
    RecentWorkComponent,
    FooterComponent
  ]
})
export class LandingPageModule {}
