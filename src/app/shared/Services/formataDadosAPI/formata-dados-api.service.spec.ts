import { TestBed } from '@angular/core/testing';

import { FormataDadosAPIService } from './formata-dados-api.service';

describe('FormataDadosAPIService', () => {
  let service: FormataDadosAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormataDadosAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
