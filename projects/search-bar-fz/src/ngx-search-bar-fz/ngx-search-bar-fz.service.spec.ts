import { TestBed } from '@angular/core/testing';

import { SearchBarFzService } from './ngx-search-bar-fz.service';

describe('SearchBarFzService', () => {
  let service: SearchBarFzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchBarFzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
