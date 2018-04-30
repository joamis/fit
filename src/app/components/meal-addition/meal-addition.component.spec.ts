import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealAdditionComponent } from './meal-addition.component';

describe('MealAdditionComponent', () => {
  let component: MealAdditionComponent;
  let fixture: ComponentFixture<MealAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
