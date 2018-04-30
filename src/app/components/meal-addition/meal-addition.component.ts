import { Component, OnInit } from '@angular/core';
import {MealClass} from '../../model/MealClass';
import {MealService} from '../../services/Meal.service';
import {InternalNotificationService} from '../../services/internal-notification.service';


@Component({
  selector: 'app-meal-addition',
  templateUrl: './meal-addition.component.html',
  styleUrls: ['./meal-addition.component.css']
})
export class MealAdditionComponent implements OnInit {

  meal: MealClass = new MealClass();

  constructor( private mealService: MealService, private internalNotificationService: InternalNotificationService) { }

  ngOnInit() {
  }

  postMeal() {
    console.log('meal w');
    this.mealService.postMeal(this.meal).subscribe(() => {
      console.log('meal was added');
      this.internalNotificationService.notifyMealsHistoryChanged();
    });
  }

}
