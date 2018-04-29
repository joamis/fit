import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MealComponent } from './components/meal/meal.component';
import { MealsComponent } from './components/meals/meals.component';


@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    MealsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
