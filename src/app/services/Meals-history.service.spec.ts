import { TestBed, inject } from '@angular/core/testing';

import { MealsHistoryService } from './Meals-history.service';

describe('MealsHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MealsHistoryService]
    });
  });

  it('should be created', inject([MealsHistoryService], (service: MealsHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
