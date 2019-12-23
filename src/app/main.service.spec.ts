import { TestBed } from '@angular/core/testing';

import { NavigationService } from './navigation/navigation.service';

describe('MainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigationService = TestBed.get(NavigationService);
    expect(service).toBeTruthy();
  });
});
