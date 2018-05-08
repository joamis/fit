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
  mealsHistoryPerDay: Map<string, MealHistoryFullClass[]> = new Map<string, MealHistoryFullClass[]>();


  constructor(private mealService: MealService,
              private mealsHistoryService: MealsHistoryService,
              private internalNotificationService: InternalNotificationService) {
  }

  ngOnInit() {
    this.getMealsHistory();
    this.internalNotificationService.getMealsHistoryNotificationObject()
      .subscribe(() => {
        this.mealsHistoryPerDay.clear();
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
              const dateString = new Date(mealHistory.date).toDateString();
              if (!this.mealsHistoryPerDay.has(dateString)) {
                this.mealsHistoryPerDay.set(dateString, []);
              }
                this.mealsHistoryPerDay.get(dateString).push(new MealHistoryFullClass(mealHistory._id,
                  meals.get(mealHistory.name), mealHistory.date));
              console.log(this.mealsHistoryPerDay);
            });

          });
      });
  }

  getMealsPerDay() {
    return this.mealsHistoryPerDay.values();
  }
}
