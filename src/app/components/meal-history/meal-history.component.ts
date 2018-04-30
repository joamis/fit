import { Component, OnInit, Input} from '@angular/core';
import {MealHistoryFullClass} from '../../model/MealsHistoryClass';

@Component({
  selector: 'app-meal-history',
  templateUrl: './meal-history.component.html',
  styleUrls: ['./meal-history.component.css']
})
export class MealHistoryComponent implements OnInit {

  @Input()
  mealHistory: MealHistoryFullClass;

  constructor() { }

  ngOnInit() {

  }

}
