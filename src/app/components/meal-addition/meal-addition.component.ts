import { Component, OnInit } from '@angular/core';
import {MealClass} from '../../model/MealClass';
import {MealService} from '../../services/Meal.service';
import {InternalNotificationService} from '../../services/internal-notification.service';
import {FileUploader} from 'ng2-file-upload';
import {imageUrl} from '../../api';


@Component({
  selector: 'app-meal-addition',
  templateUrl: './meal-addition.component.html',
  styleUrls: ['./meal-addition.component.css']
})
export class MealAdditionComponent implements OnInit {

  meal: MealClass = new MealClass();
  public uploader: FileUploader = new FileUploader({url: imageUrl});

  constructor( private mealService: MealService, private internalNotificationService: InternalNotificationService) { }

  ngOnInit() {
  }

  postMeal() {
    this.uploader.queue.forEach(item => this.meal.imageName = item._file.name);
    this.uploader.uploadAll();
    this.uploader.onCompleteAll = () => {
      console.log('image was added');
      this.uploader.clearQueue();
    }
    this.mealService.postMeal(this.meal).subscribe(() => {
      console.log('meal was added');
      this.internalNotificationService.notifyMealsHistoryChanged();
    });
    this.meal = new MealClass();
  }

}
