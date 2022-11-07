/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SelectEmitChangeService } from './select-emit-change.service';

describe('Service: SelectEmitChange', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectEmitChangeService]
    });
  });

  it('should ...', inject([SelectEmitChangeService], (service: SelectEmitChangeService) => {
    expect(service).toBeTruthy();
  }));
});
