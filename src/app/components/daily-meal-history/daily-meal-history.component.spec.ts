import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyMealHistoryComponent } from './daily-meal-history.component';

describe('DailyMealHistoryComponent', () => {
  let component: DailyMealHistoryComponent;
  let fixture: ComponentFixture<DailyMealHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyMealHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyMealHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
