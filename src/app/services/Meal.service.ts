import { Injectable } from '@angular/core';
import {MealClass} from '../model/MealClass';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {MEAL_BY_NAME_MOCK} from './mockMeals';
import {HttpClient} from '@angular/common/http';
import {mealUrl} from '../api';

@Injectable()
export class MealService {

  constructor(private http: HttpClient) { }

  getMeals(): Observable<MealClass[]> {
    console.log(mealUrl);
    return this.http.get<MealClass[]>(mealUrl);
  }

  postMeal(meal: MealClass): Observable<MealClass> {
    console.log(meal);
    return this.http.post<MealClass>(mealUrl, meal);
  }
}
