import { TestBed } from '@angular/core/testing';

import { CardScannerService } from './card-scanner.service';

describe('CardScannerService', () => {
  let service: CardScannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardScannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
