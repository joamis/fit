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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MealEatenMarkerComponent} from './components/meal-eaten-marker/meal-eaten-marker.component';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import {InternalNotificationService} from './services/internal-notification.service';



@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    MealsComponent,
    MealHistoryComponent,
    MealsHistoryComponent,
    MealAdditionComponent,
    MealEatenMarkerComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, DlDateTimePickerDateModule, NgbModule.forRoot()
  ],
  entryComponents: [MealEatenMarkerComponent  ],
  providers: [ MealService, MealsHistoryService, InternalNotificationService ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
