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
    return this.http.get<MealClass[]>(mealUrl);
  }

  postMeals(meal: MealClass) {
    this.http.post<MealClass>(mealUrl, meal ).subscribe(() => console.log('meal was added'));
  }

  getMealByName(): Observable<MealClass> {
    return of(MEAL_BY_NAME_MOCK);
  }
}
