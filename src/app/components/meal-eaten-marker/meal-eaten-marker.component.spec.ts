import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealEatenMarkerComponent } from './meal-eaten-marker.component';

describe('MealEatenMarkerComponent', () => {
  let component: MealEatenMarkerComponent;
  let fixture: ComponentFixture<MealEatenMarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealEatenMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealEatenMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
