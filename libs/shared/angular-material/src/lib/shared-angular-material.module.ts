import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogService } from './services/dialog.service';

@NgModule({
  imports: [CommonModule, MatDialogModule]
})
export class SharedAngularMaterialModule {
  static forRoot(): ModuleWithProviders<SharedAngularMaterialModule> {
    return {
      ngModule: SharedAngularMaterialModule,
      providers: [DialogService]
    };
  }
}
