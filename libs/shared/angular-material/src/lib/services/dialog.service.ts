import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(public readonly dialog: MatDialog) {}

  /**
   * Generic dialog open function.
   * @param component - Dialog component
   * @param config - Dialog config
   */
  openDialog(
    component: ComponentType<unknown> | TemplateRef<unknown>,
    config?: MatDialogConfig
  ) {
    const dialogRef = this.dialog.open(component, {
      ...config
    });

    return dialogRef;
  }
}
