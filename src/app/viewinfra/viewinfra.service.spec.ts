import { TestBed } from '@angular/core/testing';

import { ViewinfraService } from './viewinfra.service';

describe('ViewinfraService', () => {
  let service: ViewinfraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewinfraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
