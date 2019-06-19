import { async, TestBed } from '@angular/core/testing';
import { SharedAngularMaterialModule } from './shared-angular-material.module';

describe('SharedAngularMaterialModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedAngularMaterialModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedAngularMaterialModule).toBeDefined();
  });
});
