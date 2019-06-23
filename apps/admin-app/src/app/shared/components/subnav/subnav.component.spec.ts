/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SubnavComponent } from './subnav.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('SubnavComponent', () => {
  let component: SubnavComponent;
  let fixture: ComponentFixture<SubnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubnavComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubnavComponent);
    component = fixture.componentInstance;
    component.subnavConfig = { cta: true, dropdown: true, textInput: true };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
