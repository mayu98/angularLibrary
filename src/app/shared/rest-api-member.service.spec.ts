import { TestBed } from '@angular/core/testing';

import { RestApiMemberService } from './rest-api-member.service';

describe('RestApiMemberService', () => {
  let service: RestApiMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApiMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
