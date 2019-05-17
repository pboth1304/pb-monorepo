import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status.component';
import { RouterModule } from '@angular/router';
import { statusRoutes } from './status.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(statusRoutes)
  ],
  declarations: [StatusComponent]
})
export class StatusModule { }
