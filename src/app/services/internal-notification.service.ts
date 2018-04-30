import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class InternalNotificationService {

  mealsHistory: Subject<Object> = new Subject<Object>();
  notifyMealsHistoryChanged() {
    this.mealsHistory.next();
  }
  getMealsHistoryNotificationObject(): Subject<Object> {
    return this.mealsHistory;
  }

  constructor() { }

}
