import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
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

}
