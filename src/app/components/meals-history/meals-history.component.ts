import {Component, OnInit} from '@angular/core';
import {MealsHistoryService} from '../../services/Meals-history.service';
import {MealService} from '../../services/Meal.service';
import {MealHistoryFullClass} from '../../model/MealsHistoryClass';
import {MealClass} from '../../model/MealClass';

@Component({
  selector: 'app-meals-history',
  templateUrl: './meals-history.component.html',
  styleUrls: ['./meals-history.component.css']
})
export class MealsHistoryComponent implements OnInit {

  mealsHistory: MealHistoryFullClass[] = [];
  mealsView = 'MEALS';
  currentView = 'HISTORY';


  constructor(private mealService: MealService,
              private mealsHistoryService: MealsHistoryService) {
  }

  ngOnInit() {
    this.getMealsHistory();
  }


  getMealsHistory(): void {
    this.mealsHistoryService.getMealsHistory()
      .subscribe(mealsHistory => {
        const meals: Map<string, MealClass> = new Map<string, MealClass>();
        this.mealService.getMeals()
          .subscribe(meal => {
            meal.forEach(singeMeal => meals.set(singeMeal.name, singeMeal));
            mealsHistory.forEach(mealHistory => {
              this.mealsHistory.push(new MealHistoryFullClass(meals.get(mealHistory.name), mealHistory.date));
            });
          });
      });
  }


}
