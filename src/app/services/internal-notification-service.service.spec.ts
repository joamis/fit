import { TestBed, inject } from '@angular/core/testing';

import { InternalNotificationService } from './internal-notification.service';

describe('InternalNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InternalNotificationService]
    });
  });

  it('should be created', inject([InternalNotificationService], (service: InternalNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
