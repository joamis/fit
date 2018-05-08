import {Injectable} from '@angular/core';
import {userUrl} from '../api';
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
          const userFromDb = res.user;
          const username = userFromDb.login;
          localStorage.setItem('authKey', token);
          localStorage.setItem('username', username);
          console.log('userFromDb')
          console.log(userFromDb)
          localStorage.setItem('userCaloriesIntakeData', userFromDb.isMale + '|'
            + userFromDb.height + '|' + userFromDb.weight + '|'
            + userFromDb.physicalActivityRatio);
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

  getUserCaloriesIntake(): number {
    const userCaloriesDataStr =  localStorage.getItem('userCaloriesIntakeData');
    console.log(userCaloriesDataStr)
    const userCaloriesData = userCaloriesDataStr.split('|');
    const isMale: number = Boolean(userCaloriesData[0]) ? 1 : 0;
    const height: number = Number(userCaloriesData[1]);
    const weight: number = Number(userCaloriesData[2]);
    const physical_activity_ration: number = Number(userCaloriesData[3]);
    return (weight * 24) * (physical_activity_ration + 0.3 * isMale);
  }


  isLoggedIn() {
    return localStorage.getItem('authKey') !== null;
  }


}
