import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { RouterModule } from '@angular/router';
import { overviewRoutes } from './overview.routes';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(overviewRoutes),
    ReactiveFormsModule
  ],
  declarations: [OverviewComponent]
})
export class OverviewModule {}
