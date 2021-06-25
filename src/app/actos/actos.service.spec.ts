import { TestBed } from '@angular/core/testing';

import { ActosService } from './actos.service';

describe('ActosService', () => {
  let service: ActosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
