import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'pb-ressource-create',
  templateUrl: './ressource-create.component.html',
  styleUrls: ['./ressource-create.component.scss']
})
export class RessourceCreateComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    link: new FormControl('', Validators.required),
    tags: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<RessourceCreateComponent>) {}

  ngOnInit() {}
}
