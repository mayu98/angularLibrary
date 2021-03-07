import { TestBed } from '@angular/core/testing';

import { RestApiAdminService } from './rest-api-admin.service';

describe('RestApiAdminService', () => {
  let service: RestApiAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApiAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
