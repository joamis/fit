import {MealClass} from './MealClass';

export class MealHistoryClass {
  constructor(
    public meal: MealClass,
    public time: Date) {}
}
