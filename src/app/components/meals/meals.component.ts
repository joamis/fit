import { Component, OnInit } from '@angular/core';
import {MealClass} from '../../model/MealClass';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  meals: MealClass[] = []

  constructor() { }

  ngOnInit() {
    this.meals.push( new MealClass('rice with chicken', ['a', 'b'], 123, ['51', '32']));
    this.meals.push( new MealClass('gnoczajs', ['a', 'b'], 123, ['51', '32']));
    this.meals.push( new MealClass('smiejzelki', ['a', 'b'], 123, ['51', '32']));
  }

}
