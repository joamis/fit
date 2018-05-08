import { Component, OnInit } from '@angular/core';
import {CredentialsClass} from '../../model/CredentialsClass';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  loginView = 'LOGIN';
  registerView = 'REGISTER';
  currentView = this.loginView;

  user: CredentialsClass = new CredentialsClass();

  ngOnInit() {
  }

  postUser() {
    this.loginService.loginUser(this.user);
  }

  goToRegisterView() {
    this.currentView = this.registerView;
  }

  goToLogin($event: string) {
    this.currentView = this.loginView;
  }
}
