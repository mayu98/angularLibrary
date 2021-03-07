import { TestBed } from '@angular/core/testing';

import { IssueReturnService } from './issue-return.service';

describe('IssueReturnService', () => {
  let service: IssueReturnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueReturnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
