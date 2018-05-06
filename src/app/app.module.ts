import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MealComponent } from './components/meal/meal.component';
import { MealsComponent } from './components/meals/meals.component';
import {MealService} from './services/Meal.service';
import { MealHistoryComponent } from './components/meal-history/meal-history.component';
import { MealsHistoryComponent } from './components/meals-history/meals-history.component';
import {MealsHistoryService} from './services/Meals-history.service';
import {HttpClientModule} from '@angular/common/http';
import { MealAdditionComponent } from './components/meal-addition/meal-addition.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MealEatenMarkerComponent} from './components/meal-eaten-marker/meal-eaten-marker.component';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import {InternalNotificationService} from './services/internal-notification.service';
import { LoginComponent } from './components/login/login.component';
import {LoginService} from './services/login.service';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { StartComponent } from './components/start/start.component';
import {AuthGuard} from './components/guards/auth.guard';


const appRoutes: Routes = [
  {path: '', component: StartComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    MealsComponent,
    MealHistoryComponent,
    MealsHistoryComponent,
    MealAdditionComponent,
    MealEatenMarkerComponent,
    LoginComponent,
    HomeComponent,
    StartComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, DlDateTimePickerDateModule, NgbModule.forRoot(), RouterModule.forRoot(appRoutes),
  ],
  entryComponents: [MealEatenMarkerComponent  ],
  providers: [ MealService, MealsHistoryService, InternalNotificationService, LoginService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
