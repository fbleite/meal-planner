import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealScheduleComponent } from './meal-schedule.component';

describe('MealScheduleComponent', () => {
  let component: MealScheduleComponent;
  let fixture: ComponentFixture<MealScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
