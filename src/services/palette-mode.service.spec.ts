import { TestBed } from '@angular/core/testing';

import { PaletteModeService } from './palette-mode.service';

describe('PaletteModeService', () => {
  let service: PaletteModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaletteModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
