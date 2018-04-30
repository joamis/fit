import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MealComponent } from './components/meal/meal.component';
import { MealsComponent } from './components/meals/meals.component';
import {MealService} from './services/Meal.service';
import { MealHistoryComponent } from './components/meal-history/meal-history.component';
import { MealsHistoryComponent } from './components/meals-history/meals-history.component';
import {MealsHistoryService} from './services/Meals-history.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    MealsComponent,
    MealHistoryComponent,
    MealsHistoryComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [ MealService, MealsHistoryService ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
