import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {MealClass} from '../../model/MealClass';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Meal Planner';
  currentView = 'MEALS';
  additionView = 'ADDITION';
  mealsView = 'MEALS';
  historyView = 'HISTORY';


  constructor(private loginService: LoginService, private router: Router) { }
  goToHistoryView() {
    this.currentView = this.historyView;
  }

  goToMealsView() {
    this.currentView = this.mealsView;
  }
  goToAdditionView() {
    this.currentView = this.additionView;
  }

  isUSerLoggedIn() {
    return this.loginService.isLoggedIn();
  }


  logIn() {
    this.router.navigate(['/login']);
  }

  logOut() {
    this.loginService.logOut();
    this.router.navigate(['/']);
  }


  ngOnInit() {
  }

  getUsername() {
    return this.loginService.getUserName();
  }
}
