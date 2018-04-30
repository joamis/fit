import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MealClass} from '../../model/MealClass';
import {MealsHistoryService} from '../../services/Meals-history.service';

@Component({
  selector: 'app-meal-eaten-marker',
  templateUrl: './meal-eaten-marker.component.html',
  styleUrls: ['./meal-eaten-marker.component.css']
})
export class MealEatenMarkerComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private mealHistoryService: MealsHistoryService) { }

  @Input() meal: MealClass;

  date: Date = new Date();

  ngOnInit() {
  }

  markAsEaten() {
    this.mealHistoryService.postMealsHistory(this.meal, this.date);
    this.activeModal.dismiss('Meal history record added');
  }
}
