import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {InternalNotificationService} from '../../services/internal-notification.service';
import {UserClass} from '../../model/UserClass';
import {RegistrationService} from '../../services/registration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private registrationService: RegistrationService) { }
  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();
  user: UserClass = new UserClass();


  ngOnInit() {
  }

  registerUser() {
    console.log(this.user);
    this.registrationService.registerUser(this.user).subscribe(() => {
      this.goToLogin();
    });
  }

  goToLogin() {
    this.notify.emit('Back to login');
  }



}
