import { Component, OnInit, Input } from '@angular/core';
import {MealClass} from '../../model/MealClass';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MealEatenMarkerComponent} from '../meal-eaten-marker/meal-eaten-marker.component';
import {MealService} from '../../services/Meal.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  @Input() meal: MealClass = new MealClass();




  constructor(private modalService: NgbModal) {
  }

  getImageUlr(): string {
    return 'http://localhost:3000/static/' + this.meal.imageName;
  }

  ngOnInit(): void {
  }

  open(content) {
    const modalRef = this.modalService.open(MealEatenMarkerComponent);
    modalRef.componentInstance.meal = this.meal;
  }

}
