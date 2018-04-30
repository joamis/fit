import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {MealHistoryFullClass} from '../../model/MealsHistoryClass';
import {MealEatenMarkerComponent} from '../meal-eaten-marker/meal-eaten-marker.component';
import {MealsHistoryService} from '../../services/Meals-history.service';
import {InternalNotificationService} from '../../services/internal-notification.service';

@Component({
  selector: 'app-meal-history',
  templateUrl: './meal-history.component.html',
  styleUrls: ['./meal-history.component.css']
})
export class MealHistoryComponent implements OnInit {

  isDeleted = false;
  @Input()
  mealHistory: MealHistoryFullClass;

  constructor( private mealHistoryService: MealsHistoryService, private internalNotificationService: InternalNotificationService) { }

  ngOnInit() {

  }

  delete() {
    this.isDeleted = true;
    this.mealHistoryService.delFromHistory(this.mealHistory._id).subscribe(() => {
      console.log('Product deleted')
      this.internalNotificationService.notifyMealsHistoryChanged();
    });
  }

}
