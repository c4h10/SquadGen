import { TestBed } from '@angular/core/testing';

import { UpgradeModificationsService } from './upgrade-modifications.service';

describe('UpgradeModificationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpgradeModificationsService = TestBed.get(UpgradeModificationsService);
    expect(service).toBeTruthy();
  });
});
