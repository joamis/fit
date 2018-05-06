import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MealsHistoryClass} from '../model/MealsHistoryClass';
import {MealClass} from '../model/MealClass';
import {HttpClient} from '@angular/common/http';
import {getDeleteMealHistoryUrl, getPostMealsHistoryUrl, getUrlWithToken, mealHistoryUrl} from '../api';
import {LoginService} from './login.service';


@Injectable()
export class MealsHistoryService {
  constructor(private http: HttpClient, private loginService: LoginService) { }

  getMealsHistory(): Observable<MealsHistoryClass[]> {
      const token = this.loginService.getAuthKey();
      const user = this.loginService.getUserName();
      return this.http.get<MealsHistoryClass[]>(getPostMealsHistoryUrl(user, token));
  }

  postMealsHistory(meal: MealClass, date: Date): Observable<MealsHistoryClass> {
    const token = this.loginService.getAuthKey();
    const username = this.loginService.getUserName();
    const mealHistoryRecord: MealsHistoryClass =  new MealsHistoryClass('', username, meal.name, date.toDateString());
    console.log(mealHistoryRecord);
    return this.http.post<MealsHistoryClass>(getUrlWithToken(mealHistoryUrl, token), mealHistoryRecord);
  }

  delFromHistory(id: string): Observable<Object> {
    console.log('Usuwanie produktu');
    return this.http.delete(getDeleteMealHistoryUrl(id));
  }

}
