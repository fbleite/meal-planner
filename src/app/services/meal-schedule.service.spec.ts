import { TestBed } from '@angular/core/testing';

import { MealScheduleService } from './meal-schedule.service';

describe('ScheduleService', () => {
  let service: MealScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
