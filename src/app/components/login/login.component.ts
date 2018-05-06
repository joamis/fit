import { Component, OnInit } from '@angular/core';
import {CredentialsClass} from '../../model/CredentialsClass';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  user: CredentialsClass = new CredentialsClass();
  ngOnInit() {
  }

  postUser() {
    console.log('user w');
    this.loginService.loginUser(this.user);
  }
}
