import {MealClass} from './MealClass';

export class MealsHistoryClass {
  constructor(
    public name: string,
    public date: string) {}
}

export class MealHistoryFullClass {
  constructor(
    public meal: MealClass,
    public date: string) {}
}
