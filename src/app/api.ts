import {MealsHistoryClass} from './model/MealsHistoryClass';

export const server = 'http://localhost:3000';
export const mealUrl = server + '/meals';
export const mealHistoryUrl = server + '/mealsHistory'

export function getDeleteMealHistoryUrl(id: string): string {
  return mealHistoryUrl + '/' + id;
}

