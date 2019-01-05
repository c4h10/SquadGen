import { TestBed } from '@angular/core/testing';

import { XwingTranslationService } from './xwing-translation.service';

describe('XwingTranslationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XwingTranslationService = TestBed.get(XwingTranslationService);
    expect(service).toBeTruthy();
  });
});
