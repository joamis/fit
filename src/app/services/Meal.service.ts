import { Injectable } from '@angular/core';
import {MealClass} from '../model/MealClass';

@Injectable()
export class MealServiceService {

  constructor() { }

  getMeals(): MealClass{
    return meals;
  }

}
