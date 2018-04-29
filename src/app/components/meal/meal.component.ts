import { Component, OnInit, Input } from '@angular/core';
import {MealClass} from '../../model/MealClass';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  @Input() meal: MealClass;

  constructor() {
  }

  ngOnInit(): void {
  }

}
