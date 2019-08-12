import { TestBed } from '@angular/core/testing';

import { MainToolbarServiceService } from './main-toolbar-service.service';

describe('MainToolbarServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainToolbarServiceService = TestBed.get(MainToolbarServiceService);
    expect(service).toBeTruthy();
  });
});
