import { Injectable } from '@angular/core';
import {registrationUrl} from '../api';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {UserClass} from '../model/UserClass';

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) { }


  registerUser(user: UserClass): Observable<UserClass> {
    console.log('registrationService');
    console.log(user);
    return this.http.post<UserClass>(registrationUrl, user);
  }

}
