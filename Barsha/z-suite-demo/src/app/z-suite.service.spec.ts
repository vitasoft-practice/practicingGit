import { TestBed } from '@angular/core/testing';

import { ZSuiteService } from './z-suite.service';

describe('ZSuiteService', () => {
  let service: ZSuiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZSuiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
