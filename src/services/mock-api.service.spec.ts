import { MockAPIService } from './mock-api.service';
import { TestBed } from '@angular/core/testing';


describe('MockAPIService', () => {
  let service: MockAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
