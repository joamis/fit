import { TestBed, inject } from '@angular/core/testing';

import { MealServiceService } from './Meal-service.service';

describe('MealServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MealServiceService]
    });
  });

  it('should be created', inject([MealServiceService], (service: MealServiceService) => {
    expect(service).toBeTruthy();
  }));
});
