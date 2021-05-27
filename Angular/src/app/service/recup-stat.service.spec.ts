import { TestBed } from '@angular/core/testing';

import { RecupStatService } from './recup-stat.service';

describe('RecupStatService', () => {
  let service: RecupStatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecupStatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
