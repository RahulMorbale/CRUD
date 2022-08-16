import { TestBed } from '@angular/core/testing';

import { ResolveGuardService } from './resolve-guard.service';

describe('ResolveGuardService', () => {
  let service: ResolveGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
