export class MealClass {
  constructor(
  public _id: string = '',
  public name: string = '',
  public imageName: string = '',
  public ingredients: string[] = [],
  public calories: number = 0,
  public makro: number[] = [3] ) {}
}
