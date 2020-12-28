import { TestBed } from '@angular/core/testing';

import { PlancursoService } from './plancurso.service';

describe('PlancursoService', () => {
  let service: PlancursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlancursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
