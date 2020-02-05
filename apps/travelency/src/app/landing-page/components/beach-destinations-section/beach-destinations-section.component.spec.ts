import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachDestinationsSectionComponent } from './beach-destinations-section.component';

describe('BeachDestinationsSectionComponent', () => {
  let component: BeachDestinationsSectionComponent;
  let fixture: ComponentFixture<BeachDestinationsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeachDestinationsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachDestinationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
