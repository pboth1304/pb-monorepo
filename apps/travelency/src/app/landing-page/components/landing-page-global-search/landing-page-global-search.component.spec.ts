import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageGlobalSearchComponent } from './landing-page-global-search.component';

describe('LandingPageGlobalSearchComponent', () => {
  let component: LandingPageGlobalSearchComponent;
  let fixture: ComponentFixture<LandingPageGlobalSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageGlobalSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageGlobalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
