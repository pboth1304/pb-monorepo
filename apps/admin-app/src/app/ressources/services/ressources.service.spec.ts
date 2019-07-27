/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { RessourcesService } from './ressources.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('Service: Ressources', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RessourcesService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([RessourcesService], (service: RessourcesService) => {
    expect(service).toBeTruthy();
  }));
});
