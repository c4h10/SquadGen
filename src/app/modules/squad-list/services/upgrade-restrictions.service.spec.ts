import { TestBed } from '@angular/core/testing';

import { UpgradeRestrictionsService } from './upgrade-restrictions.service';

describe('UpgradeRestrictionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpgradeRestrictionsService = TestBed.get(UpgradeRestrictionsService);
    expect(service).toBeTruthy();
  });
});
