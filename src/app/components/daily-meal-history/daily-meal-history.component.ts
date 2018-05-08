import {Component, Input, OnInit} from '@angular/core';
import {MealHistoryFullClass} from '../../model/MealsHistoryClass';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-daily-meal-history',
  templateUrl: './daily-meal-history.component.html',
  styleUrls: ['./daily-meal-history.component.css']
})
export class DailyMealHistoryComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  @Input()
  mealsHistory: MealHistoryFullClass[];

  ngOnInit() {
  }

  getEatenCalories(): Number {
    return this.mealsHistory.map(mealHistory => mealHistory.meal.calories).reduce((sum, calories) => sum + calories);
  }

  getCaloriesRequired(): number {
    return this.loginService.getUserCaloriesIntake();
  }
}
