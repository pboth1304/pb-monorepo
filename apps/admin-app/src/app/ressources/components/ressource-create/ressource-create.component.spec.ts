/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RessourceCreateComponent } from './ressource-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RessourceCreateComponent', () => {
  let component: RessourceCreateComponent;
  let fixture: ComponentFixture<RessourceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RessourceCreateComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [{ provide: MatDialogRef, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RessourceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
