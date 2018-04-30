import { Component, OnInit } from '@angular/core';
import {MealClass} from '../../model/MealClass';
import {MealService} from '../../services/Meal.service';
import {MealsHistoryClass} from '../../model/MealsHistoryClass';
import {MealsHistoryService} from '../../services/Meals-history.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  meals: MealClass[] = [];

  constructor( private mealService: MealService) { }

  ngOnInit() {
    this.getMeals();
    }


  getMeals(): void {
    this.mealService.getMeals()
      .subscribe(meals => this.meals = meals);
  }

}


