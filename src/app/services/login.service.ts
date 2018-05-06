import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { userUrl} from '../api';
import {CredentialsClass} from '../model/CredentialsClass';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private router: Router) {
    this.isUserLoggedIn = false;
  }

  private isUserLoggedIn;

  loginUser(user: CredentialsClass): void {
    this.http.post<any>(userUrl, user)
      .subscribe((res) => {
        console.log('User logged in');
        console.log(res);
        const token = res.token;
        const username = res.username;
        localStorage.setItem('authKey', token);
        localStorage.setItem('username', username);
        this.router.navigate(['/home']);
      },
      () => {
        alert('Wrong login and/or password');
      });
  }

  logOut() {
    localStorage.removeItem('authKey');
    localStorage.removeItem('username');
  }

  getAuthKey(): string {
    return localStorage.getItem('authKey');
  }

  getUserName(): string {
    return localStorage.getItem('username');
  }

  isLoggedIn() {
    return localStorage.getItem('authKey') !== null;
  }


}
