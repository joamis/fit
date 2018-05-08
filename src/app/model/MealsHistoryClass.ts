import {MealClass} from './MealClass';

export class MealsHistoryClass {
  constructor(
    public _id: string = '',
    public user: string = '',
    public name: string,
    public date: Date) {}
}

export class MealHistoryFullClass {
  constructor(
    public _id: string = '',
    public meal: MealClass = new MealClass(),
    public date: Date) {}
}
