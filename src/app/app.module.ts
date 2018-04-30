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
import { MealAdditionComponent } from './components/meal-addition/meal-addition.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    MealsComponent,
    MealHistoryComponent,
    MealsHistoryComponent,
    MealAdditionComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [ MealService, MealsHistoryService ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
