import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUprightComponent } from './card-upright.component';

describe('CardUprightComponent', () => {
  let component: CardUprightComponent;
  let fixture: ComponentFixture<CardUprightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardUprightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUprightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
