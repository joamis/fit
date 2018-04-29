import { TestBed, inject } from '@angular/core/testing';

import { MealHistoryService } from './Meal-history.service';

describe('MealHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MealHistoryService]
    });
  });

  it('should be created', inject([MealHistoryService], (service: MealHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
