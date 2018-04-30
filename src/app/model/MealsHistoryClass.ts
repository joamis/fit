import {MealClass} from './MealClass';

export class MealsHistoryClass {
  constructor(
    public mealName: string,
    public date: string) {}
}

export class MealHistoryFullClass {
  constructor(
    public meal: MealClass,
    public date: string) {}
}
