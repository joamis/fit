import { Component, OnInit } from '@angular/core';
import {MealClass} from '../../model/MealClass';
import {MealService} from '../../services/Meal.service';

@Component({
  selector: 'app-meal-addition',
  templateUrl: './meal-addition.component.html',
  styleUrls: ['./meal-addition.component.css']
})
export class MealAdditionComponent implements OnInit {

  meal: MealClass = new MealClass();

  constructor( private mealService: MealService) { }

  ngOnInit() {
  }

  postMeal() {
    this.mealService.postMeal(this.meal);
  }

}
