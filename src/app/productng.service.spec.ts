import { TestBed, inject } from '@angular/core/testing';

import { ProductngService } from './productng.service';

describe('ProductngService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductngService]
    });
  });

  it('should be created', inject([ProductngService], (service: ProductngService) => {
    expect(service).toBeTruthy();
  }));
});
