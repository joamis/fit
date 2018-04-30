import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meal Planner';
  currentView = 'MEALS';


  mealsView = 'MEALS';
  historyView = 'HISTORY';
  goToHistoryView() {
    this.currentView = this.historyView;
  }

  goToMealsView() {
    this.currentView = this.mealsView;
  }
}
