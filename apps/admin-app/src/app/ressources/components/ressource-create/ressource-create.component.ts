import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RessourcesService } from '../../services/ressources.service';

@Component({
  selector: 'pb-ressource-create',
  templateUrl: './ressource-create.component.html',
  styleUrls: ['./ressource-create.component.scss']
})
export class RessourceCreateComponent {
  public form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    link: new FormControl('', Validators.required),
    tags: new FormControl('')
  });

  constructor(
    private readonly dialogRef: MatDialogRef<RessourceCreateComponent>,
    private readonly ressourcesService: RessourcesService
  ) {}

  /**
   * Submit's form values and calls `closeDialog()`.
   */
  public submitForm(): void {
    if (this.form.valid) {
      this.ressourcesService
        .createRessource(this.form.value)
        .subscribe(id => this.ressourcesService.getRessourceById(id));
      this.closeDialog();
    }
  }

  /**
   * Closes dialog.
   */
  public closeDialog(): void {
    this.dialogRef.close();
  }
}
