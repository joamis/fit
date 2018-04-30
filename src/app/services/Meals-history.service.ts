import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MealsHistoryClass} from '../model/MealsHistoryClass';
import {MealClass} from '../model/MealClass';
import {HttpClient} from '@angular/common/http';
import {mealHistoryUrl} from '../api';

@Injectable()
export class MealsHistoryService {

  constructor(private http: HttpClient) { }

  getMealsHistory(): Observable<MealsHistoryClass[]> {
      return this.http.get<MealsHistoryClass[]>(mealHistoryUrl);
  }

  postMealsHistory(meal: MealClass, date: Date) {
    const mealHistoryRecord: MealsHistoryClass =  new MealsHistoryClass(meal.name, date.toDateString());
    console.log(mealHistoryRecord);
    return this.http.post<MealsHistoryClass>(mealHistoryUrl, mealHistoryRecord).
    subscribe(() => console.log('meal was added to history'));
  }
}
