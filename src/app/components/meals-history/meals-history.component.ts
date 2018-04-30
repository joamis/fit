import {Component, OnInit} from '@angular/core';
import {MealsHistoryService} from '../../services/Meals-history.service';
import {MealService} from '../../services/Meal.service';
import {MealHistoryFullClass} from '../../model/MealsHistoryClass';
import {MealClass} from '../../model/MealClass';
import {InternalNotificationService} from '../../services/internal-notification.service';

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
              private mealsHistoryService: MealsHistoryService,
              private internalNotificationService: InternalNotificationService) {
  }

  ngOnInit() {
    this.getMealsHistory();
    this.internalNotificationService.getMealsHistoryNotificationObject()
      .subscribe(() => {
        this.mealsHistory = [];
        this.getMealsHistory();
      });
  }


  getMealsHistory(): void {
    this.mealsHistoryService.getMealsHistory()
      .subscribe(mealsHistory => {
        const meals: Map<string, MealClass> = new Map<string, MealClass>();
        this.mealService.getMeals()
          .subscribe(meal => {
            meal.forEach(singeMeal => meals.set(singeMeal.name, singeMeal));
            mealsHistory.forEach(mealHistory => {
              this.mealsHistory.push(new MealHistoryFullClass(mealHistory._id, meals.get(mealHistory.name), mealHistory.date));
            });
          });
      });
  }
}
